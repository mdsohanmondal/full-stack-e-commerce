const prisma = require('../lib/prisma');

// Get all user from database
const getAllUsers = async (_req, res) => {
  const users = await prisma.user.findMany({});
  return res.json({ status: 200, data: users });
};

// Find user from database with id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== 'string') {
      res.status(400).json({ message: 'invalid id' });
    }
    const user = await prisma.user.findUnique({
      where: { id },
      include: { wishLists: true, carts: true },
    });
    if (!user) {
      return res.status(400).json({ message: 'user not found', status: 400 });
    }

    return res.json({ status: 200, user });
  } catch (err) {
    console.error('Error fetching user', err);
    res.status(500).json({ status: 500, message: 'server error' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
};
