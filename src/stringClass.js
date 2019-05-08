const { upperAndLowerConverter } = require('../helper/helper');

String.prototype.hasVowels = function() {
  var vowelsPattern = /[aeiou]/gi;

  return vowelsPattern.test(this);
};

String.prototype.toUpper = function() {
  let lowerCharRegex = /[a-z]/g;

  return this.replace(lowerCharRegex, upperAndLowerConverter);
};

String.prototype.toLower = function() {
  let upperCharRegex = /[A-Z]/g;

  return this.replace(upperCharRegex, upperAndLowerConverter);
};

String.prototype.ucFirst = function() {
  let firstLetterRegExp = /^[a-z]/;

  return this.replace(firstLetterRegExp, function(match) {
    return match.toUpper();
  });
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

String.prototype.toCurrency = function() {
  let reg = /\d(?=(\d{3}){1,}\.)/g;

  return this.replace(reg, '$&,');
};

String.prototype.fromCurrency = function() {
  var commaRegExp = /,/g;
  return this.replace(commaRegExp, '');
};

String.prototype.inverseCase = function() {
  var upperCaseRegExp = /^[A-Z]$/;

  return this.split('')
    .map(character => {
      return upperCaseRegExp.test(character)
        ? character.toLower()
        : character.toUpper();
    })
    .join('');
};

String.prototype.alternatingCase = function() {
  return this.split('')
    .map((character, index) => {
      return index % 2 === 0 ? character.toLower() : character.toUpper();
    })
    .join('');
};

String.prototype.numberWords = function() {
  var strings = this.split('');
  var stringLength = strings.length;
  var wordLetter = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  var letter = '';
  for (let index = 0; index < stringLength; index++) {
    var string = strings[index];
    if (index === stringLength - 1) {
      letter += wordLetter[string];
    } else {
      letter += wordLetter[string] + ' ';
    }
  }
  return letter;
};

String.prototype.isDigit = function() {
  var isDigitRegExp = /^[0-9]$/;

  return isDigitRegExp.test(this);
};
