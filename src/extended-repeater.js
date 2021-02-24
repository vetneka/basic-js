const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const resultStrParts = [];
  const resultAdditionStrParts = [];

  for (let i = 0; i < additionRepeatTimes; i += 1) {
    resultAdditionStrParts.push(String(addition));
  }

  for (let i = 0; i < repeatTimes; i += 1) {
    const resultStrPart = `${String(str)}${resultAdditionStrParts.join(additionSeparator)}`;
    resultStrParts.push(resultStrPart);
  }

  return resultStrParts.join(separator);
};
  