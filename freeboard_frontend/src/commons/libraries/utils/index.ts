export const getDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const dates = `${year}-${month}-${day}`;

  return dates;
};
