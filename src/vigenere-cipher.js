const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(typeOfMachine = true) {
    this.typeOfMachine = typeOfMachine;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error('Incorrect arguments!');
    }

    let result = '';
    let keyChInd = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      const ch = message[i];

      if (!this.alphabet.includes(ch)) {
        result += ch;
        continue;
      }

      const keyCh = key[keyChInd];
      result +=
        this.alphabet[
          (this.alphabet.indexOf(ch) + this.alphabet.indexOf(keyCh)) % 26
        ];

      if (keyChInd + 1 >= key.length) {
        keyChInd = 0;
      } else {
        keyChInd++;
      }
    }

    if (this.typeOfMachine) {
      return result;
    }
    return result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw Error('Incorrect arguments!');
    }

    let result = '';
    let keyChInd = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      const ch = message[i];

      if (!this.alphabet.includes(ch)) {
        result += ch;
        continue;
      }

      const keyCh = key[keyChInd];
      result +=
        this.alphabet[
          (this.alphabet.indexOf(ch) - this.alphabet.indexOf(keyCh) + 26) % 26
        ];

      if (keyChInd + 1 >= key.length) {
        keyChInd = 0;
      } else {
        keyChInd++;
      }
    }

    if (this.typeOfMachine) {
      return result;
    }
    return result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
