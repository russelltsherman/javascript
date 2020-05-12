const assert = require('assert');

/**
 * Merge sort is one of the most efficient sorting algorithms.
 * It works on the principle of Divide and Conquer.
 * Merge sort repeatedly breaks down a list into several sublists until each
 * sublist consists of a single element and merging those sublists in a manner
 * that results into a sorted list.
 *
 * Runtime complexity - O(n log n)
 * Space complexity - O(n)
 */

/**
 * accept two sorted arrays
 * return array sorted using merge sort
 * @param {*} arr
 */
function merge(arr1, arr2) {
  const results = []; // hold merged results
  let i = 0; // increment counter for arr1
  let j = 0; // increment counter for arr2
  // iterate over both arrays until the end of one is reached
  while (i < arr1.length && j < arr2.length) {
    // compare increment values and push to result
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i += 1;
    } else {
      results.push(arr2[j]);
      j += 1;
    }
  }
  // arr1 longer than arr2
  while (i < arr1.length) {
    // push remainder of arr1 into result
    results.push(arr1[i]);
    i += 1;
  }
  // arr2 longer than arr1
  while (j < arr2.length) {
    // push remainder of arr2 into result
    results.push(arr2[j]);
    j += 1;
  }
  return results;
}

assert.deepEqual(merge([1, 10, 50], [2, 14, 99, 100]), [1, 2, 10, 14, 50, 99, 100]);
assert.deepEqual(merge([], [1, 3]), [1, 3]);

/**
 * accept an array
 * sort array using merge sort
 * return sorted array
 * @param {*} arr
 */
function mergeSort(arr) {
  // when array is single element stop
  if (arr.length <= 1) return arr;
  // get mid point of array
  const mid = Math.floor(arr.length / 2);
  // split array into left part
  const left = arr.slice(0, mid);
  // split array into right part
  const right = arr.slice(mid);
  // return sorted and merged array
  return merge(mergeSort(left), mergeSort(right));
}

assert.deepEqual(mergeSort([10, 24, 76, 73, 72, 1, 9]), [1, 9, 10, 24, 72, 73, 76]);
