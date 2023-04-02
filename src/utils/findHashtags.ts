export default function (s: string): string[] {
  const regex = /#\w+/g;
  const hashtags = s.match(regex);
  const uniq = new Set(hashtags);
  return Array.from(uniq);
}
