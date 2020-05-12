const assert = require('assert');

/**
 * Quicksort is a divide-and-conquer algorithm.
 * It works by selecting a 'pivot' element from the array and partitioning
 * the other elements into two sub-arrays, according to whether they are
 * less than or greater than the pivot. The sub-arrays are then sorted recursively.
 * This can be done in-place, requiring small additional amounts of memory to perform the sorting.
 *
 * Runtime complexity - O(n*n)
 * Space complexity - O(n)
 */

/**
 * accept an array and two index values
 * return an array with the values for the specified indexes swapped
 * @param {*} arr
 * @param {*} idx1
 * @param {*} idx2
 */
function swap(arr, idx1, idx2) {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

// assert.deepEqual(pivot([1, 2, 3, 4, 5], 0, 4), [1, 2, 3, 4, 5]);
// assert.deepEqual(pivot([1, 2, 3, 4, 5], 1, 3), [1, 2, 3, 4, 5]);

/**
 * accept an array and optionally a start and end index
 * return the index of the pivot point for the array
 * @param {*} arr
 * @param {*} start
 * @param {*} end
 */
function pivot(arr, start = 0, end = arr.length - 1) {
  // We are assuming the pivot is always the first element
  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i += 1) {
    if (pivot > arr[i]) {
      swapIdx += 1;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

assert.equal(pivot([4, 8, 2, 1, 5, 7, 6, 3]), 3);

/**
 * accept an array
 * return array sorted using quick sort algorythm
 * @param {*} arr
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

assert.deepEqual(quickSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
// assert.deepEqual(quickSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5]);
