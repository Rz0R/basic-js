import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let subArrCounter = 0;

    for (const item of arr) {
      if (Array.isArray(item)) {
        const depth = this.calculateDepth(item);
        if (subArrCounter < depth) {
          subArrCounter = depth;
        }
      }
    }

    return subArrCounter + 1;
  }
}

export default DepthCalculator;