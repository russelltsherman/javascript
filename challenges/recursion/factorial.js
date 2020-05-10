/**
 * accept a number and return the factorial of that number
 * A factorial is the product of an integer and all the integers below it
 * @param {*} x
 */
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
