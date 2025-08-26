require('dotenv').config();
const http = require('http');
const app = require('./app/app.js');
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  `server is listening on ${PORT}`;
});
