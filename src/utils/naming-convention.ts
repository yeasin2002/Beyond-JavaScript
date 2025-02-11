export function toTitleCase(str: string): string {
  if (!str) return str;
  const spaced = str
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
  return spaced
    .split(' ')
    .map(word =>
      word.length === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}
