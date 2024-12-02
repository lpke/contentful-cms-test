export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const ampm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12 || 12;
  const hourStr = hours.toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hourStr}:${minutes}${ampm}`;
}
