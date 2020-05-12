const assert = require('assert');

/**
 * accepts an array and value
 * returns the index at which value is found in array
 * returns -1 if the value is not found
 * @param {*} arr
 * @param {*} val
 */
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) return i;
  }
  return -1;
}

assert.equal(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100), -1);
assert.equal(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4), 5);
assert.equal(linearSearch([100], 100), 0);
assert.equal(linearSearch([1, 2, 3, 4, 5], 6), -1);
