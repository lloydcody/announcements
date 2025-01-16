import { isWithinInterval, parse, format } from 'date-fns';

export const parseDate = (dateStr: string): Date => {
  return parse(dateStr, 'dd/MM/yyyy', new Date());
};

export const isTimeInRange = (currentTime: number, fromTime: string, toTime: string): boolean => {
  const [fromHours, fromMinutes] = fromTime.split(':').map(Number);
  const [toHours, toMinutes] = toTime.split(':').map(Number);
  const from = fromHours * 60 + fromMinutes;
  const to = toHours * 60 + toMinutes;
  
  return currentTime >= from && currentTime <= to;
};

export const isDateInRange = (date: Date, fromDate: string, toDate: string): boolean => {
  if (!fromDate || !toDate) return true; // If no dates specified, consider it always valid
  
  return isWithinInterval(date, {
    start: parseDate(fromDate),
    end: parseDate(toDate)
  });
};

export const getCurrentDayShort = (): string => {
  return format(new Date(), 'EEE');
};