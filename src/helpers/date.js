import moment from "moment";

const momentNow = moment();
export const dateNow = momentNow.format("DD MMM YYYY");

export function getWeekDay() {
  const weekDay = momentNow.day();

  switch (weekDay) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      return "Mon";
  }
}
