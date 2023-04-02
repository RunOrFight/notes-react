export default function (searchString: string, inTags: string[]) {
  if (!searchString) return true;
  return searchString
    .split(' ')
    .find((search) => inTags.find((tag) => tag.toLowerCase().includes(search.toLowerCase())));
}
