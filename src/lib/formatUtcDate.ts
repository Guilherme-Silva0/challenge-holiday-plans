export function formatUtcDate(date: string | Date) {
  let dateFormat = new Date(date).toUTCString();
  dateFormat = dateFormat.replace(/00:00:00 GMT/g, "");
  return dateFormat;
}
