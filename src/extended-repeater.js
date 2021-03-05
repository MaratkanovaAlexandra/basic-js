const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let s = String(str);

  if(!(options.addition === undefined)){ s += options.addition}
  for(let i = 1; i<= options.additionRepeatTimes-1;i++){
    if(options.additionSeparator === undefined){
      s += '|' + options.addition;
    }else{
      s+= options.additionSeparator+options.addition;
    }
  }

  let r = s
  for(let i = 1; i<= options.repeatTimes-1;i++){
    if(options.separator === undefined){
      s += '+' + r;
    }else{
      s += options.separator + r;
    }
  }
  return s;

};
  