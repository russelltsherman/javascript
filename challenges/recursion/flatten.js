/**
 * accept an array of arrays
 * return a snew array with vall values flattened
 * @param {*} oldArr
 */
function flatten(oldArr) {
  var newArr = []
  for (var i = 0; i < oldArr.length; i += 1) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}
