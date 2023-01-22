const formDate = (date: any) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US");
};

export default formDate;
