const assert = require('assert');

/**
 * accept a sorted array and a value
 * return the index at which the value exists in the array
 * return -1 if the value does not exist
 * @param {*} arr
 * @param {*} val
 */
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

assert.equal(binarySearch([1, 2, 3, 4, 5], 2), 1);
assert.equal(binarySearch([1, 2, 3, 4, 5], 6), -1);
assert.equal(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103), -1);
