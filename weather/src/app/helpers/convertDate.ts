import { format } from 'date-fns';

const convertDate = (date: string | undefined): string => {
  if (date) {
    const dateObj = new Date(date);

    return format(dateObj, 'dd/MM');
  } else {
    return 'error parsing date';
  }
};

export default convertDate;
