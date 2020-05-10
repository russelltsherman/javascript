/**
 * accept an object which may contain nested objects
 * Return the sum of all even numbers in an object
 * @param {*} obj
 * @param {*} sum
 */
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}
