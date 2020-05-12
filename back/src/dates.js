const moment = require("moment")

const getWeekDates = id =>
{
  let dateObj = moment(id);
  return days = [1, 2, 3, 4, 5, 6, 7]
  .map(d => {
   let day = moment(dateObj.year()+"-"+dateObj.isoWeek()+"-" + d, 'YYYY-W-E');
    return day.format("YYYYMMDD");
  });
}

module.exports = { getWeekDates }