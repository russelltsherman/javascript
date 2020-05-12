/* eslint-disable no-console */
const assert = require('assert');

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i += 1) {
    temp = 0;
    for (let j = 0; j < num; j += 1) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17);
assert.equal(maxSubarraySum([3, 2, 1, 6], 1), 6);
assert.equal(maxSubarraySum([4, 2, 1, 6, 2], 4), 13);
assert.equal(maxSubarraySum([], 4), null);
