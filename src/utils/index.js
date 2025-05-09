export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("fa-IR");
};
 
export const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}; 