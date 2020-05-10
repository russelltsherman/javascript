/**
 * accept an array and a callback
 * return if a single value in the array returns true
 * when passed to the callback
 * @param {*} array
 * @param {*} callback
 */
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
