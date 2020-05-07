const Sequelize = require("sequelize");
const envVarUse = process.env.DB_USERNAME;
const envVarPas = process.env.DB_PASSWORD;
const envVarHos = process.env.DB_HOSTNAME;

async function healthcheck(ctx) {
  ctx.response.status = 200;
  return new Sequelize(
    `postgres://${envVarUse}:${envVarPas}@${envVarHos}:5432/menu`
  )
    .authenticate()
    .then(() => {
      ctx.response.body = { success: "true" };
      return;
    })
    .catch(err => {
      console.log({
        code: "DB001",
        name: "Database connectivity problems",
        message: err
      });
      ctx.response.body = { success: "false" };
      return;
    });
}

module.exports = healthcheck;
