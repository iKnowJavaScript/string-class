const { upperAndLowerConverter } = require('../helper/helper');

String.prototype.hasVowels = function() {
  var vowelsPattern = /[aeiou]/gi; // regular expression to find any vowel in a string

  return vowelsPattern.test(this); // returns true if found else false
};

String.prototype.toUpper = function() {
  let lowerCharRegex = /[a-z]/g; // regular expression pattern that find all lowerCase in a string
  /*
    replaces every lowerCase Character with its uppercase equivalent
    passing them as parameter to the upperAndLowerConverter function from helper.js
  */
  return this.replace(lowerCharRegex, upperAndLowerConverter);
};

String.prototype.toLower = function() {
  let upperCharRegex = /[A-Z]/g; // regular expression pattern that find all upperCase in a string
  /*
    replaces every upperCase Character with its lowerCase equivalent
    passing them as parameter to the upperAndLowerConverter function from helper.js
  */
  return this.replace(upperCharRegex, upperAndLowerConverter);
};

String.prototype.ucFirst = function() {
  let firstLetterRegExp = /^[a-z]/; // regular expression pattern that finds the first lowerCase alphabet

  return this.replace(firstLetterRegExp, function(match) {
    return match.toUpper(); // replaces the found character with uppercase equivalent
  });
};

String.prototype.isQuestion = function() {
  var question = this.trim(); // removes spaces around the string
  var questionReGex = /^.{2,}\?$/; // Regex that checks if the last character of a string is ?

  return questionReGex.test(question); // returns true if found else false
};

String.prototype.words = function() {
  var string = this.trim(); // removes spaces around the string
  var splitRegExp = /\s+/g; // Regex that matches one or more spaces

  return string.split(splitRegExp); // Spilt the string into an array by spaces found
};

String.prototype.wordCount = function() {
  return this.words().length; //get the length of the splited string array
};

String.prototype.toCurrency = function() {
  /*
  \d  - matches a single digits
  (?=(\d{3}){1,}\. - a positive lookAhead for 3 digits in one or  more cases followed 
  by . that may appear one ore infinite cases and capturing the matches
  */
  let reg = /\d(?=(\d{3}){1,}\.)/g;

  return this.replace(reg, '$&,'); // replaces the match cases with its value and a comma
};

String.prototype.fromCurrency = function() {
  var commaRegExp = /,/g; //Regex that matches all comma
  return this.replace(commaRegExp, ''); // replaces the comma with nothing
};

String.prototype.inverseCase = function() {
  var alphabetRegExp = /([a-zA-Z])/g; // Regex to match all alphabet
  var upperCaseRegExp = /[A-Z]/; // Regex to match only upperCase alphabet

  /*
  replaces all alphabet with its inverse equivalent
  */
  return this.replace(alphabetRegExp, function(character) {
    return upperCaseRegExp.test(character)
      ? character.toLower()
      : character.toUpper();
  });
};

String.prototype.alternatingCase = function() {
  /*
  split the string into an array and convert every odd index character to lowercase 
  and even index character into upperCase then return the result
  */
  return this.split('')
    .map((character, index) => {
      return index % 2 === 0 ? character.toLower() : character.toUpper();
    })
    .join('');
};

String.prototype.numberWords = function() {
  var stringArray = this.split(''); // split the string into an array
  var stringLength = stringArray.length; // get the length on the stringArray

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
  }; // store the number and word equivalent into an objects

  var letter = '';
  for (let index = 0; index < stringLength; index++) {
    var string = stringArray[index]; //each number from the array of numbers
    /*
    if its the last element in the array add the word equivalent of the number
    to letter else add the word equivalent of the number and a single space " "
    */
    index === stringLength - 1
      ? (letter += wordLetter[string])
      : (letter += wordLetter[string] + ' ');
  }
  return letter;
};

String.prototype.isDigit = function() {
  var isDigitRegExp = /^[0-9]$/; //Regex that will match only one digit.

  return isDigitRegExp.test(this); // returns true if found else false
};
