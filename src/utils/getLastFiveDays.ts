import {subDays, format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function getLastFiveDays(date: Date) {
  let labelFiveDaysAgo: Array<string> = [];
  let dateFiveDaysAgo: Array<number> = [];
  let numberOfTheDayOfTheWeek: Array<number> = [];
  for (var i = 1; i < 6; i++) {
    const subDay = subDays(date, i);
    const subDayFormat = format(subDay, 'eeeeee', {locale: ptBR});
    const subDayCapitalizeFirstLetter =
      subDayFormat.charAt(0).toUpperCase() + subDayFormat.slice(1);
    labelFiveDaysAgo.push(subDayCapitalizeFirstLetter);
    numberOfTheDayOfTheWeek.push(subDay.getDay());
    dateFiveDaysAgo.push(subDay.getDate());
  }
  labelFiveDaysAgo.reverse();
  // dateFiveDaysAgo.reverse();

  return {labelFiveDaysAgo, numberOfTheDayOfTheWeek, dateFiveDaysAgo};
}
