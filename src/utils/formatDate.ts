export const formatDate = (date: string | Date | undefined) => {
  if (date) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en");
  }
};
