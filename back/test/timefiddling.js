
const moment = require("moment")

let dateObj = moment('20200512');
  let days = [1, 2, 3, 4, 5, 6, 7]
  .map(d => {
   let day = moment(dateObj.year()+"-"+dateObj.isoWeek()+"-" + d, 'YYYY-W-E');
    return day.format("YYYYMMDD");
  });
console.log(days);
