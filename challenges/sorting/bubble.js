const assert = require('assert');

/**
 * Bubble sort, sometimes referred to as sinking sort, is a simple sorting
 * algorithm that repeatedly steps through the list, compares adjacent elements
 * and swaps them if they are in the wrong order. The pass through the list is
 * repeated until the list is sorted.
 *
 * Runtime complexity - O(n*x)
 * Space complexity - O(1)
 */

/**
 * accept an array
 * return array sorted using bubble sort algorythm
 * @param {*} arr
 */
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i -= 1) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

assert.deepEqual(bubbleSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
assert.deepEqual(bubbleSort([5, 1, 2, 3, 4]), [1, 2, 3, 4, 5]);
