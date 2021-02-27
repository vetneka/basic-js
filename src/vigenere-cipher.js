const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirectMachine = true) {
    this.isDirectMachine = isDirectMachine;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error(`Unexpected mandatory arguments: message - ${message}, key - ${key}`);
    }

    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();

    let encryptedMessage = [];

    for (let i = 0, j = 0; i < upperMessage.length; i += 1, j += 1) {
      if (!this.alphabet.includes(upperMessage[i])) {
        encryptedMessage.push(upperMessage[i]);
        j -= 1;
        continue;
      }

      const messageLetter = upperMessage[i].charCodeAt();
      const keyLetter = upperKey[j % upperKey.length].charCodeAt();
      const encryptedLetterIndex = (messageLetter + keyLetter) % this.alphabet.length;

      encryptedMessage.push(this.alphabet[encryptedLetterIndex]);
    }

    if (!this.isDirectMachine) {
      encryptedMessage.reverse();
    }

    return encryptedMessage.join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error(`Unexpected mandatory arguments: encryptedMessage - ${encryptedMessage}, key - ${key}`);
    }

    const upperEncryptedMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();

    let decryptedMessage = [];

    for (let i = 0, j = 0; i < upperEncryptedMessage.length; i += 1, j += 1) {
      if (!this.alphabet.includes(upperEncryptedMessage[i])) {
        decryptedMessage.push(upperEncryptedMessage[i]);
        j -= 1;
        continue;
      }

      const messageLetter = upperEncryptedMessage[i].charCodeAt();
      const keyLetter = upperKey[j % upperKey.length].charCodeAt();
      const decryptedLetterIndex = (messageLetter + this.alphabet.length - keyLetter) % this.alphabet.length;

      decryptedMessage.push(this.alphabet[decryptedLetterIndex]);
    }

    if (!this.isDirectMachine) {
      decryptedMessage.reverse();
    }

    return decryptedMessage.join('');
  }
}

module.exports = VigenereCipheringMachine;
