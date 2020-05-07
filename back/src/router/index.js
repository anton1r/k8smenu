const Router = require("koa-router");
const router = new Router();

const healthcheck = require("../healthcheck");
router.get("/healthcheck", healthcheck);

const getDay = require("../day");
router.get(
  "/day/:id",
  getDay
);

module.exports = router;
