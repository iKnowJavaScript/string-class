# String-Class

[![CircleCI](https://circleci.com/gh/iKnowJavaScript/string-class/tree/master.svg?style=svg)](https://circleci.com/gh/iKnowJavaScript/string-class/tree/master)

Extending the String class in Javascript using Prototype Oriented Programming.

## methods added:

| Methods                          | Description                                                                                   | Examples                                                |
| -------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| String.prototype.hasVowels       | check for vowels (aeiou) in a string and returns `true` of `false`                            | "good".hasVowels() returns `true`                       |
| String.prototype.isQuestion      | Checks is a string is a valid question nd returns `true` of `false`                           | "to be or not to be?".isQuestion() returns `true`       |
| String.prototype.toUpper         | Convert a lowercase string to uppercase without using inbuild uppercase method                | "github".toUpper() returns "GITHUB"                     |
| String.prototype.toLower         | Convert an uppercase string to lowercase                                                      | "GITHUB".toLower() returns "github"                     |
| String.prototype.ucFirst         | Convert the first character in a string to uppercase                                          | "i am groot".ucFirst() returns "I am groot"             |
| String.prototype.words           | Used to split the words of a string into an array                                             | "life is good".words() returns ["life","is","good"]     |
| String.prototype.wordCount       | Returns the number of words in the string                                                     | "groot is good".wordCount() returns 3                   |
| String.prototype.inverseCase     | Used to inverse the character case in a string                                                | "grOOt".inverseCase() returns "GRooT"                   |
| String.prototype.isDigit         | Used to identify single digits                                                                | "2".isDigit() returns true                              |
| String.prototype.alternatingCase | used to alternate the character case in a string with the first character as always lowercase | "Onomatopoeia".alternatingCase() returns "oNoMaToPoEiA" |
| String.prototype.numberToWord    | used to convert numbers in a string to their equivalent in words                              | "325".numberToWord() returns "three two five"           |
| String.prototype.fromCurrency    | used to convert currency strings to numbers equivalent                                        | "11,111.11".fromCurrency() returns 11111.11             |
| String.prototype.toCurrency      | used to convert Strings to currency equivalent                                                | "1000".toCurrency() returns "1,000"                     |

## Testing

Jest was used to test every functionality of this Project.

Feel free to clone and `npm init` to get the feel of the app and `npm test` before adding more functionality if you wish.

