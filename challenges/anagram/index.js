/* eslint-disable no-console */
const assert = require('assert');

function isAnagram(str1, str2) {
  // an anagram uses all the letters
  if (str1.length !== str2.length) return false;

  // initialize hash to store inspection results
  const lookup = {};

  // iterate first string
  for (let i = 0; i < str1.length; i += 1) {
    const letter = str1[i];

    // store count of letter
    if (lookup[letter]) {
      lookup[letter] += 1;
    } else {
      lookup[letter] = 1;
    }
  }

  // iterate second string
  for (let i = 0; i < str2.length; i += 1) {
    const letter = str2[i];

    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }

  return true;
}

assert.equal(isAnagram('', ''), true);
assert.equal(isAnagram('aaz', 'zza'), false);
assert.equal(isAnagram('anagram', 'nagaram'), true);
