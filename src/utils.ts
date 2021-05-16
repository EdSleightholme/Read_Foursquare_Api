export const isDateFiveMinsOld= (date:Date) => {
    const FIVEMINS = 1000 * 60 * 5;
    const dateFiveMinsAgo =new Date(Date.now() - FIVEMINS);

    return date > dateFiveMinsAgo;
  };