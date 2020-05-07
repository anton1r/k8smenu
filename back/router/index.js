const Router = require("koa-router");
const router = new Router();

const healthcheck = require("../healthcheck");
router.get("/healthcheck", healthcheck);

module.exports = router;
