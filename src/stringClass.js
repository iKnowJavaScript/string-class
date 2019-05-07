String.prototype.hasVowels = function() {
  var vowelsPattern = /[aeiou]/gi;

  return vowelsPattern.test(this);
};

String.prototype.toUpper = function() {
  return this.split("")
    .map(e => {
      let index = e.charCodeAt(e);
      return index > 96 && index < 123
        ? (e = String.fromCharCode(index - 32))
        : e;
    })
    .join("");
};

String.prototype.toLower = function() {
  return this.split("")
    .map(e => {
      let index = e.charCodeAt(e);
      return index > 63 && index < 91
        ? (e = String.fromCharCode(index + 32))
        : e;
    })
    .join("");
};
