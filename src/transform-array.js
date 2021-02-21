const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument isn\'t array!');
  }
  const copyArr = arr.slice();

  for (let i = 0; i < copyArr.length; i += 1) {
    switch (copyArr[i]) {
      case '--double-prev':
        copyArr[i] = (copyArr[i - 1] !== undefined) ? copyArr[i - 1] : undefined;
        break;
      case '--double-next':
        copyArr[i] = (copyArr[i + 1] !== undefined) ? copyArr[i + 1] : undefined;
        break;
      case '--discard-prev':
        copyArr[i - 1] = undefined;
        copyArr[i] = undefined;
        break;
      case '--discard-next':
        copyArr[i + 1] = undefined;
        copyArr[i] = undefined;
        break;
    
      default:
        break;
    }
  }

  return copyArr.filter((item) => item !== undefined);
};
