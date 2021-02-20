const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const secondsPerHour = 3600;

  const turns = (2 ** disksNumber) - 1;
  const turnsPerSecond = turnsSpeed / secondsPerHour;
  const seconds = Math.floor(turns / turnsPerSecond);

  return {
    turns,
    seconds,
  };
};
