const assert = require('assert');

/**
 * Insertion sort is the sorting mechanism where the sorted array is built having one item at a time.
 * The array elements are compared with each other sequentially and then arranged simultaneously in some particular order.
 * The analogy can be understood from the style we arrange a deck of cards.
 *
 * Runtime complexity - O(n*n)
 * Space complexity - O(1)
 */

/**
 * accept an array
 * return array sorted using insertion sort algorythm
 * @param {*} arr
 */
function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i += 1) {
    currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j -= 1) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

assert.deepEqual(insertionSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
assert.deepEqual(insertionSort([5, 1, 2, 3, 4]), [1, 2, 3, 4, 5]);
