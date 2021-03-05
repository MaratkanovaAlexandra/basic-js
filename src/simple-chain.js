const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length; 
  },
  addLink(value) {
    if(value===undefined){
      this.chain.push(' ');
    }else{
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    if((typeof position != 'number')|(position < 0)|(~~(position) != position)|(position > this.chain.length-1)){
      this.chain = [];
      throw new Error
    }
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let s = '( ' + this.chain[0] + ' )';
    for(let i = 1; i<this.chain.length;i++){
      s += '~~( ' + this.chain[i] + ' )'; 
    }
    this.chain = [];
    return s;
  }
};

module.exports = chainMaker;
