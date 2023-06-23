export function recJosephus(n: number): number {
  if (n === 0) return 0;

  if(n === 1) return 1;

  if (n % 2 === 0) return recJosephus(n / 2) * 2 - 1;
  else return recJosephus(Math.floor(n / 2)) * 2 + 1;
}

export function closedJosephus(n: number): number {
  const m = Math.floor(Math.log(n) / Math.log(2));
  const l = n - Math.pow(2, m);
  return 2 * l + 1;
}
