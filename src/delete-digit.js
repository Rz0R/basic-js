const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = Number.MIN_SAFE_INTEGER;

  let arrNum = n.toString().split('');

  for (let i = 0; i < arrNum.length; i++) {
    let testNum = '';
    for (let j = 0; j < arrNum.length; j++) {
      if (j !== i) {
        testNum += arrNum[j];
      }
    }

    testNum = Number(testNum);
    if (testNum > maxNum) {
      maxNum = testNum;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit,
};
