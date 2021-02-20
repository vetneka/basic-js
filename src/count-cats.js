const CustomError = require("../extensions/custom-error");

// module.exports = function countCats(matrix) {
//   let result = 0;

//   matrix.forEach((row) => {
//     row.forEach((cell) => result += (cell === '^^') ? 1 : 0);
//   });

//   return result;
// };

module.exports = function countCats(matrix) {
  return matrix.flat().filter((item) => item === '^^').length;
};