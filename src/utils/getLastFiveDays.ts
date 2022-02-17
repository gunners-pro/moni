import {subDays, format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function getLastFiveDays(date: Date) {
  let fiveDaysAgo: Array<string> = [];
  let numberOfTheDayOfTheWeek: Array<number> = [];
  for (var i = 1; i < 6; i++) {
    const subDay = subDays(date, i);
    const subDayFormat = format(subDay, 'eeeeee', {locale: ptBR});
    const subDayCapitalizeFirstLetter =
      subDayFormat.charAt(0).toUpperCase() + subDayFormat.slice(1);
    fiveDaysAgo.push(subDayCapitalizeFirstLetter);
    numberOfTheDayOfTheWeek.push(subDay.getDay());
  }
  fiveDaysAgo.reverse();
  return {fiveDaysAgo, numberOfTheDayOfTheWeek};
}
