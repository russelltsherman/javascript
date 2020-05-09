/* eslint-disable no-console */
const assert = require('assert');

function maxSubarraySum(arr, n) {
  // n must be smaller than array
  if (arr.length < n) return null;

  let max = 0; // hold maximum sum
  let tmp = 0; // hold current sum

  // sum first window
  for (let i = 0; i < n; i += 1) {
    tmp += arr[i];
  }
  // is initial max
  max = tmp;

  // iterate array moving the window and calculating sum
  for (let i = n; i < arr.length; i += 1) {
    // calculate sum of new window
    tmp = tmp - arr[i - n] + arr[i];
    // determine if max
    max = Math.max(max, tmp);
  }

  // return max
  return max;
}

assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17);
assert.equal(maxSubarraySum([3, 2, 1, 6], 1), 6);
assert.equal(maxSubarraySum([4, 2, 1, 6, 2], 4), 13);
assert.equal(maxSubarraySum([], 4), null);
