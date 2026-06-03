function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;

  const reversed = parseInt(
    Math.abs(x).toString().split("").reverse().join("")
  ) * sign;

  const MIN_INT = -(2 ** 31);
  const MAX_INT = 2 ** 31 - 1;

  if (reversed < MIN_INT || reversed > MAX_INT) {
    return 0;
  }

  return reversed;
}