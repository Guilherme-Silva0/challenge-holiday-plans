export function parseDate(dateString: string): Date | null {
  if (new Date(dateString)) {
    return new Date(dateString);
  }

  const formattedDate = dateString.replace(/-/g, ",");

  const parsedDate = new Date(formattedDate);

  if (isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate;
}
