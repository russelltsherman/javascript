const assert = require('assert');

/**
 * The selection sort algorithm sorts an array by repeatedly finding the minimum
 * element (considering ascending order) from unsorted part and putting it at
 * the beginning. The algorithm maintains two subarrays in a given array.
 *
 * Runtime complexity - O(n*n)
 * Space complexity - O(1)
 */

/**
 * accept an array
 * return array sorted using selection sort algorythm
 * @param {*} arr
 */
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i += 1) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

assert.deepEqual(selectionSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
assert.deepEqual(selectionSort([5, 1, 2, 3, 4]), [1, 2, 3, 4, 5]);
