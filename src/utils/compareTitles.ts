export default function (searchTitle: string, inTitle: string): string {
  const regex = new RegExp(searchTitle, 'i');
  if (!searchTitle) return inTitle;
  return inTitle.match(regex)?.[0] || '';
}
