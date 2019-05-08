String.prototype.hasVowels = function() {
  var vowelsPattern = /[aeiou]/gi;

  return vowelsPattern.test(this);
};

String.prototype.toUpper = function() {
  return this.split('')
    .map(character => {
      var characterCode = character.charCodeAt(character);
      return characterCode > 96 && characterCode < 123
        ? (character = String.fromCharCode(characterCode - 32))
        : character;
    })
    .join('');
};

String.prototype.toLower = function() {
  return this.split('')
    .map(character => {
      var characterCode = character.charCodeAt(character);
      return characterCode > 63 && characterCode < 91
        ? (character = String.fromCharCode(characterCode + 32))
        : character;
    })
    .join('');
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

String.prototype.toCurrency = function() {
  var currencyArray = this.split('.');
  var regex = /((?:\d{3}))(?=\.|$|)/g;

  var interger = currencyArray[0]
    .split('')
    .reverse()
    .join('');
  interger = interger
    .replace(regex, '$1,')
    .split('')
    .reverse()
    .join('');

  return currencyArray[1]
    ? interger + '.' + currencyArray[1]
    : interger + '.' + '00';
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
