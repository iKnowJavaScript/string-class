String.prototype.hasVowels = function() {
  let vowelsPattern = /[aeiou]/gi;

  return vowelsPattern.test(this);
};



let str = "HhhhE";
console.log(str.hasVowels());
//module.exports = { String };
