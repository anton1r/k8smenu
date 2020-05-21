const { Menu } = require("../database/models");

const getDay = async id => {
  return Menu.findOne({
    attributes: ["Key", "Data"],
    where: {
      Key: id
    }});
};

module.exports = async ctx => {
  const dbResponse = await getDay(ctx.params.id);
  ctx.body = dbResponse.Data;
  ctx.response.status = 200;
};