const app = require("./app.js");
const PORT = process.env.DATA_API_PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(
    `Server listening on port: ${PORT}, env = ${process.env.DATA_API_PORT}`
  );
});

module.exports = server;
