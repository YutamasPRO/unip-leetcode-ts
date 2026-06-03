function myAtoi(s: string): number {
  let i = 0;
  const n = s.length;

  while (i < n && s[i] === " ") {
    i++;
  }

  let sign = 1;

  if (i < n && (s[i] === "+" || s[i] === "-")) {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  let result = 0;

  while (i < n && s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + Number(s[i]);
    i++;
  }

  result *= sign;

  const MIN_INT = -(2 ** 31);
  const MAX_INT = 2 ** 31 - 1;

  if (result < MIN_INT) {
    return MIN_INT;
  }

  if (result > MAX_INT) {
    return MAX_INT;
  }

  return result;
}