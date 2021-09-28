import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(origArr) {

    if (!Array.isArray(origArr)) {
        throw Error('\'arr\' parameter must be an instance of the Array!');
    }

    const arr = origArr.slice();
    const resArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-next' && i + 1 !== arr.length) {
            resArr.push(arr[i + 1]);
        } else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined) {
            resArr.push(arr[i - 1])
        } else if (arr[i] === '--discard-prev' && arr[i - 1] !== undefined) {
            resArr.pop();
        } else if (arr[i] === '--discard-next') {
            arr[i + 1] = undefined;
            console.log(arr[i + 1]);
        } else if (arr[i] !== '--double-prev' && arr[i] !== '--double-next' && arr[i] !== '--discard-prev' && arr[i] !== undefined) {
            resArr.push(arr[i]);
        }
    }

    return resArr;
}

export default transform;