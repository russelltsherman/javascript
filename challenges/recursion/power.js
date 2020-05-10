/**
 * accepts a base and an exponent
 * return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow()
 *  - do not worry about negative bases and exponents.
 * @param {*} base
 * @param {*} exponent
 */
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
