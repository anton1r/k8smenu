const { Menu, sequelize } = require("../database/models");
const moment = require("moment")
const { getWeekDates } = require('../dates')



const createDay = async id => {
  return Menu.create({
    Key: id,
    Data: "{'adults':'something','kids':'fishfingers'}"
  });
};

return sequelize.sync({ force: true })
.then(res => {
  console.log("DB SYNCED!")
  let days = getWeekDates('20200512');
  return Promise.all(days.map(async date => await createDay(date)))
})
.then(result => console.log('Database seeded'))