/**
 * accept a string and return the same string in reverse
 * @param {*} str
 */
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
