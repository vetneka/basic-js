const CustomError = require("../extensions/custom-error");

// [[1], 2, [3, 4, [5, 6], 7], 8, [9]] 
// module.exports = class DepthCalculator {
class DepthCalculator {
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

const calc = new DepthCalculator();
console.log(calc.calculateDepth([[1], 2, [3, 4, [5, 6], 7], 8, [9]]));