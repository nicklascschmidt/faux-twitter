
const monthsShortened = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'];

export const getDateFormatted = (dateString) => {
  const date = new Date(dateString);
  const hoursSinceDate = Math.floor((Date.now() - date) / (1000 * 60 * 60));
  if (hoursSinceDate < 24) return `${hoursSinceDate}h`;
  return `${monthsShortened[date.getMonth() - 1]} ${date.getDate()}`;
};
