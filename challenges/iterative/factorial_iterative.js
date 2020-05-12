function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i -= 1) {
    total *= i;
  }
  return total;
}
