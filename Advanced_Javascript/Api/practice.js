let dt = 1750502093;
const curDate = new Date(dt * 1000);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};

const formatter = new Intl.DateTimeFormat("en-US").format(date);

const formattedDate = formatter.format(curDate);
console.log(formattedDate); // Output: "Monday, April 17, 2023, 12:34 AM GMT+5:30"

return formattedDate;
