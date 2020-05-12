const Router = require("koa-router");
const router = new Router();

const healthcheck = require("../healthcheck");
router.get("/healthcheck", healthcheck);

const getDay = require("../day");
router.get(
  "/day/:id",
  getDay
);

const getWeek = require("../week")
router.get(
  "/week/:id",
  getWeek
);

module.exports = router;
