const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){return false};
  
  let s = '';
  for(let i = 0;i<members.length;i++){
    if(typeof members[i] == 'string'){
      members[i]= members[i].replace(/\s/g, '');
      s += members[i][0].toUpperCase()
    }
  }
  let r = s.split('');
  r.sort()
  return r.join('');
};
