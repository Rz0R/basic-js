const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    let counter = 1;

    while (ch === str[i + 1]) {
      counter++;
      i++;
    }

    result += `${counter > 1 ? counter : ''}${ch}`;
  }

  return result;
}

module.exports = {
  encodeLine,
};
