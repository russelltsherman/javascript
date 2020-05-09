/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

const assert = require('assert');

// function same(arr1, arr2) {
//   // if array lengths do not match
//   if (arr1.length !== arr2.length) return false;

//   // iterate arr1
//   for (let i = 0; i < arr1.length; i += 1) {
//     // check that element is integer
//     if (!Number.isInteger(arr1[i])) return false;

//     // check if corresponding square value exists in arr2
//     const idx = arr2.indexOf(arr1[i] ** 2);
//     if (idx === -1) return false;

//     // remove corresponding square value from arr2
//     arr2.splice(idx, 1);
//   }
//   return true;
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // console.log(frequencyCounter1);
  // console.log(frequencyCounter2);

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

assert.equal(same(['A', 'B', 'b', 'a'], [9, 1, 4, 4]), false);
assert.equal(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]), false);
assert.equal(same([1, 2, 3, 2], [9, 1, 4, 4]), true);
