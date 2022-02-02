export const padStart = (string: string | number | boolean, char: string, count: number) =>
  `${char.repeat(count)}${string.toString()}`.slice(-count);
