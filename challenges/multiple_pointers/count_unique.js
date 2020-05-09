/* eslint-disable no-console */
const assert = require('assert');

function countUnique(arr) {
  // create object to hold references
  const lookup = {};
  // iterate over array
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i]; // store value
    // store value count in lookup
    if (lookup[val]) {
      lookup[val] += 1;
    } else {
      lookup[val] = 1;
    }
  }
  // return the count of lookup object keys
  return Object.keys(lookup).length;
}

assert.equal(countUnique([1, 1, 1, 1, 1, 2]), 2);
assert.equal(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), 7);
assert.equal(countUnique([]), 0);
assert.equal(countUnique([-2, -1, -1, 0, 1]), 4);
