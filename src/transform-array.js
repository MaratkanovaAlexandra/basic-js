const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){throw new Error};
  let a = [];
  for(let i=0;i<arr.length;i++){a.push(arr[i])};

  if((a[0]=="--discard-prev")|(a[0] =="--double-prev")){a.shift()};
  if((a[a.length-1] == "--double-next")|(a[a.length-1] == "--discard-next")){a.pop()};

  for(let i =0;i<a.length;i++){
    switch(a[i]){
      case "--discard-prev":
        a.splice(i-1,2);
        i--;
        break;
      case "--double-prev": 
        a.splice(i,1,a[i-1]);
        break;
      case "--double-next":
        a.splice(i,1,a[i+1]);
        break;
      case "--discard-next":
        if((a[i+2] == "--double-prev")|(a[i+2] =="--discard-prev")){a.splice(i,3)}
        else {a.splice(i,2);i--}
        break;
    }
  }
  return a;
};  
