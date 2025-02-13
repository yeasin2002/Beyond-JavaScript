export function cs(...args: Record<string, string | undefined>[]): string[] {
  return args.map(arg => Object.values(arg).join(' '));
}
