const assert = require('assert');

/**
 * Radix sort is an integer sorting algorithm that sorts data with integer keys by grouping
 * the keys by individual digits that share the same significant position and value (place value).
 * Radix sort uses counting sort as a subroutine to sort an array of numbers.

 * Runtime complexity - O(n*x)
 * Space complexity - O(n)
 */

/**
 * accept an array
 * return array sorted using radix sort algorythm
 * @param {*} arr
 */
function radixSort(arr) {
  return arr;
}

assert.deepEqual(radixSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
assert.deepEqual(radixSort([5, 1, 2, 3, 4]), [1, 2, 3, 4, 5]);
