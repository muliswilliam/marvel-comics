const selectDate = (dates, type) => {
  const { date } = dates.find(date => date.type === type);
  const jsDate = new Date(date);

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(jsDate);
};

export default selectDate;
