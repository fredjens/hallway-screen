import dateFns from 'date-fns';

export default function checkIfDayOrNight() {
  const time = dateFns.getHours((new Date));
  const isDay = time > 7 && time < 17 ? 'DAY' : 'NIGHT';
  return isDay;
}
