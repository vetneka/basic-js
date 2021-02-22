const CustomError = require("../extensions/custom-error");

let chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push((value === undefined) ? '( )' : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    const normalizedPosition = position - 1;
    if (
      typeof position !== 'number' ||
      this.chain[normalizedPosition] === undefined
    ) {
      this.chain = [];
      throw new Error(`Invalid position: ${position}`);
    }
    this.chain.splice(normalizedPosition, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const resultChain = this.chain.slice();
    this.chain = [];
    return resultChain.join('~~');
  },
};

module.exports = chainMaker;
