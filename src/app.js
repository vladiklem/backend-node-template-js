const express = require("express");

const router = require("./router/router");
const setupMiddlewares = require("./midlewares/setupMiddlewares");
const systemController = require("./controllers/systemController");

process.on("unhandledRejection", (err) => {
  console.error(err.message);
});

const startServer = (port) => {
  const app = express();

  setupMiddlewares(app);
  router(app);
  systemController(app);

  app.listen(port, () => {
    console.log(`My Application Running on http://localhost:${port}/`);
  });
};

module.exports = startServer;
