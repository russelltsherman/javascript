/* eslint-disable no-console */
const assert = require('assert');

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const m = Math.floor((min + max) / 2);

    if (arr[m] < val) {
      min = m + 1;
    } else if (arr[m] > val) {
      max = m - 1;
    } else {
      return m;
    }
    console.log(min, max, m);
  }
  return -1;
}

assert.equal(search([1, 2, 3, 4, 5, 6], 4), 3);
assert.equal(search([1, 2, 3, 4, 5, 6], 6), 5);
assert.equal(search([1, 2, 3, 4, 5, 6], 11), -1);
