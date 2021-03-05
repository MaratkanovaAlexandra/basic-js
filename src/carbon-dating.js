const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string'){return false}
  else{
  let numder = +sampleActivity;
  if((+sampleActivity == NaN)|(+sampleActivity<1)|(+sampleActivity > MODERN_ACTIVITY)){return false};

  let age = Math.log(MODERN_ACTIVITY/numder)/(0.693/HALF_LIFE_PERIOD);
  if(~~(age) + 1 == 1){return false}
  return ~~(age) + 1;}
  // remove line with error and write your code here
};
