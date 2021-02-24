const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const resultAdditionStr = Array(additionRepeatTimes)
    .fill()
    .map(() => String(addition))
    .join(additionSeparator);

  return Array(repeatTimes)
    .fill()
    .map(() => `${String(str)}${resultAdditionStr}`)
    .join(separator);
};
  