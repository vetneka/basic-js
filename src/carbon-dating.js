const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityNormalized = parseInt(sampleActivity);

  if (
    typeof sampleActivity !== 'string'||
    Number.isNaN(sampleActivityNormalized) ||
    (sampleActivityNormalized <= 0 || sampleActivityNormalized >= MODERN_ACTIVITY)
  ) {
    return false;
  }

  const reactionConstant = Math.LN2 / HALF_LIFE_PERIOD;

  const year = Math.log(MODERN_ACTIVITY / sampleActivityNormalized) / reactionConstant;

  return Math.ceil(year);
};
