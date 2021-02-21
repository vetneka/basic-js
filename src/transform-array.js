const CustomError = require("../extensions/custom-error");

const isControlSequence = (sequence) => typeof sequence === 'string' && sequence.startsWith('--');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument isn\'t array!');
  }
  const copyArr = arr.slice();
  const transformedArray = [];

  for (let i = 0; i < copyArr.length; i += 1) {
    const item = copyArr[i];

    if (isControlSequence(item)) {
      if (item === '--discard-next') {
        copyArr[i + 1] = '--removed';
        i += 1;
      } else if (item === '--discard-prev') {
        const prevItem = copyArr[i - 1];
        if (prevItem !== undefined && !isControlSequence(prevItem)) {
          transformedArray.pop();
        }
      } else if (item === '--double-next') {
        if (copyArr[i + 1] !== undefined) {
          transformedArray.push(copyArr[i + 1]);
        }
      } else if (item === '--double-prev') {
        const prevItem = copyArr[i - 1];
        if (prevItem !== undefined && !isControlSequence(prevItem)) {
          transformedArray.push(transformedArray[transformedArray.length - 1]);
        }
      } 
    } else {
      transformedArray.push(item);
    }
  }

  return transformedArray.filter((item) => !isControlSequence(item));
};



[
  '--double-prev',
  Infinity,
  '--double-next',
  { '0': 'first', '1': 'second', length: 2 },
  '--double-next',
  'GHI',
  '--double-next',
  0,
  true,
  3.14,
  Infinity,
  '--double-next'
]
[
  Infinity,
  { '0': 'first', '1': 'second', length: 2 },
  { '0': 'first', '1': 'second', length: 2 },
  'GHI',
  'GHI',
  0,
  0,
  true,
  3.14,
  Infinity
]