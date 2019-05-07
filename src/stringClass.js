String.prototype.hasVowels = function() {
  var vowelsPattern = /[aeiou]/gi;

  return vowelsPattern.test(this);
};

String.prototype.toUpper = function() {
  return this.split("")
    .map(e => {
      var index = e.charCodeAt(e);
      return index > 96 && index < 123
        ? (e = String.fromCharCode(index - 32))
        : e;
    })
    .join("");
};

String.prototype.toLower = function() {
  return this.split("")
    .map(e => {
      var index = e.charCodeAt(e);
      return index > 63 && index < 91
        ? (e = String.fromCharCode(index + 32))
        : e;
    })
    .join("");
};

String.prototype.ucFirst = function() {
  var word = this.trim();
  return word.charAt(0).toUpper() + word.slice(1);
};

String.prototype.isQuestion = function() {
  var question = this.trim();
  var questionReGex = /^.{2,}\?$/;

  return questionReGex.test(question);
};

String.prototype.words = function() {
  var string = this.trim();
  var splitRegExp = /\s+/g;

  return string.split(splitRegExp);
};

String.prototype.wordCount = function() {
  return this.words().length;
};

String.prototype.toCurrency = function() {};

String.prototype.fromCurrency = function() {};

String.prototype.inverseCase = function() {};

String.prototype.alternatingCase = function() {};

String.prototype.numberWords = function() {};

String.prototype.isDigit = function() {
  var isDigitRegExp = /^[0-9]$/;

  return isDigitRegExp.test(this);
};
