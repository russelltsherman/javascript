const assert = require('assert');

/**
 * accept two strings representing a haystack and a needle
 * return the count of time which needle is found in haystack
 * @param {*} long
 * @param {*} short
 */
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i += 1) {
    for (let j = 0; j < short.length; j += 1) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count += 1;
    }
  }
  return count;
}

assert.equal(naiveSearch('lorie loled', 'lol'), 1);
assert.equal(naiveSearch('lorie loled', 'lo'), 2);
assert.equal(naiveSearch('lorie loled', 'ace'), 0);
