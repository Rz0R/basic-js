import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let result = {};

  for (let domain of domains) {
    domain = domain.split('.').reverse();
    let key = '';
    for (const name of domain) {
      key += `.${name}`;
      if (result[key]) {
        result[key]++;
      } else {
        result[key] = 1;
      }
    }
  }
  return result;
}

export default getDNSStats;