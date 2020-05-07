const Koa = require("koa");
const app = new Koa();

const koaBody = require("koa-bodyparser");
app.use(koaBody());

const router = require("./router");
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
