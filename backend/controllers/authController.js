const prisma = require('../lib/prisma');
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await prisma.user.create({
    data: { username, email, password },
  });
  if (user) {
    res.json({ message: 'user created successfully', status: 200, user });
  }
};

module.exports = { createUser };
