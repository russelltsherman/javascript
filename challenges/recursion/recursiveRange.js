/**
 * accept a number and return the sum of all the numbers from 0 to the number
 * @param {*} x
 */
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
