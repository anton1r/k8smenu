const { Menu, sequelize } = require("../database/models");

const getDay = async id => {
  return Menu.findOne({
    attributes: ["Data"],
    where: {
      Key: id
    }});
};

const createDay = async id => {
  return Menu.create({
    Key: id,
    Data: "{'adults':'something','kids':'fishfingers'}"
});
};

module.exports = async ctx => {
  await sequelize.sync({ force: true });
  await createDay(ctx.params.id);
  const dbResponse = await getDay(ctx.params.id);
  ctx.body = dbResponse.Data;
  ctx.response.status = 200;
};