const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        const currentDepth = this.calculateDepth(item) + 1;
        result = (currentDepth > result) ? currentDepth : result;
      }
    });

    return result;
  }
};