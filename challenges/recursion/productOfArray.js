/**
 * accept an array of numbers and return the product of them all
 * @param {*} arr
 */
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
