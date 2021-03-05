const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
    if(mode|(mode === undefined)){this.mode = true}
    else{this.mode = false}
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  }

  encrypt(line,key) {
    if((line.length == 0)|(key.length == 0)){throw new Error};
    let r = line.toUpperCase().split('');
    key = key.toUpperCase().repeat(13).split('');
    
    for(let i =0;i<r.length;i++){
      if(this.alphabet.includes(r[i])){
       r[i] = this.alphabet[((this.alphabet.indexOf(r[i])+this.alphabet.indexOf(key[i]))%26)]
      }else{
        key.splice(i,0,' ')
      }
    }
    if(!this.mode){
      r.reverse()
      return r.join('')}
    return r.join('');
  }   
  decrypt(line,key) {
    if((line.length == 0)|(key.length == 0)){throw new Error};
    let r = line.toUpperCase().split('');
    key = key.toUpperCase().repeat(13).split('');
    for(let i =0;i<r.length;i++){
      if(this.alphabet.includes(r[i])){
        r[i] = this.alphabet[(this.alphabet.indexOf(r[i])+26-this.alphabet.indexOf(key[i]))%26]
      }else{
        key.splice(i,0,' ')
      }
    }
    if(!this.mode){return r.reverse().join('')}
    return r.join('');
  }
}

module.exports = VigenereCipheringMachine;
