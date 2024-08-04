import { format } from 'date-fns';

const getFormattedDate = (): string => {
  return format(new Date(), 'dd / MM / yyy, MMM, E,   HH:mm:ss, a');
};

export default getFormattedDate;
