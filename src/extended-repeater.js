import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, optional) {

  let result = '';

  const separator = optional.separator || '+';
  const repeatTimes = optional.repeatTimes;
  const addition =  (optional.hasOwnProperty('addition')) ? String(optional.addition) : '';
  const additionRepeatTimes = optional.additionRepeatTimes;
  const additionSeparator = optional.additionSeparator || '|';

  let addStr = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  let newStr = str  + addStr;
  result = (newStr + separator).repeat(repeatTimes - 1) + newStr; 

  return result;
}

export default repeater;
