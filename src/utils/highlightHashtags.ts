export default function (text: string) {
  const regex = new RegExp(/#(\w+)\b(?![^<]*<\/mark>)/, 'g');

  return text.replace(regex, '<mark>$&</mark>');
}
