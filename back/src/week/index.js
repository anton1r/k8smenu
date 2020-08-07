const { Menu } = require("../database/models");
const { Op } = require('sequelize')
const { getWeekDates } = require('../dates')

const getWeek = async ids => {
  return Menu.findAll({
    attributes: ["Key", "Data"],
    where: {
      Key: {
        [Op.or]: ids
    }}});
};

module.exports = async ctx => {
  let days = getWeekDates(ctx.params.id);
  
  return getWeek(days)
    .then(dbResponse => {
    const rsp = JSON.parse(dbResponse.flat());
    ctx.body = rsp;
    ctx.response.status = 200;
    return;
  });
};