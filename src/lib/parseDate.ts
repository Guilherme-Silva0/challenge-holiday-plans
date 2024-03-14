export function parseDate(dateString: string | Date): Date | null {
  if (new Date(dateString)) {
    return new Date(dateString);
  }

  if (dateString instanceof Date) {
    return dateString;
  }

  const formattedDate = dateString.replace(/-/g, ",");

  const parsedDate = new Date(formattedDate);

  if (isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate;
}
