/* eslint-disable no-console */
const assert = require('assert');

function sumZero(arr) {
  // iterate array
  for (let i = 0; i < arr.length; i += 1) {
    const first = arr[i];
    // iterate the rest of array
    for (let j = i + 1; j < arr.length; j += 1) {
      const second = arr[j];
      // if sum of values is zero return values array
      if (first + second === 0) return [first, second];
    }
  }
  return [];
}

assert.deepEqual(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]);
assert.deepEqual(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]), [-2, 2]);
assert.deepEqual(sumZero([-4, -3, -2, 0, 1, 5, 7]), []);
assert.deepEqual(sumZero([1, 2, 3]), []);
