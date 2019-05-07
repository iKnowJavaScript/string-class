//Type definitions for Jest
//npm install @types/jest
var { String } = require('../src/stringClass');

describe('Testing the Extended methods added to String Prototype', function() {
  describe('Testing hasVowels()', function() {
    it('Should return true if the string contains vowels', function() {
      var string = 'Vowel is here';
      expect(string.hasVowels()).toBeTruthy();
    });
    it('Should return true if the string contains vowels', function() {
      var string = 'gypt';
      expect(string.hasVowels()).toBeFalsy();
    });
  });

  describe('Test cases for toUpper()', function() {
    it('Should return the string in capital varter', function() {
      var string = 'All in Capital';
      expect(string.toUpper()).toMatch('ALL IN CAPITAL');
      expect('Some_-case'.toUpper()).toMatch('SOME_-CASE');
    });
  });

  describe('Test cases for toLower()', function() {
    it('Should return the string in lowercase form', function() {
      var string = 'ALL IN LOWERCASE';
      expect(string.toLower()).toMatch('all in lowercase');
    });
  });

  describe('Test cases for ucFirst()', function() {
    it('Should return the string Capitalizing first varter', function() {
      var string = 'capitalise';
      expect(string.ucFirst()).toMatch('Capitalise');
      expect(' capitalise'.ucFirst()).toMatch('Capitalise');
    });
  });

  describe('Test cases for isQuestion()', function() {
    it('Should return true if the string is a valid question sectence', function() {
      var string = 'How are you doing ? ';
      expect(string.isQuestion()).toBeTruthy();
    });
    it('Should return false if the string is not a valid question sectence', function() {
      var string = 'How are you doing';
      expect(string.isQuestion()).toBeFalsy();
    });
  });

  describe('Test cases for words()', function() {
    it('Should return array of words in the string', function() {
      var string = 'How are you doing';
      expect(string.words()).toEqual(
        expect.arrayContaining(['How', 'are', 'you', 'doing'])
      );
      expect(string.words()).toHaveLength(4);
    });
  });

  describe('Test cases for wordCount()', function() {
    it('Should return number of words in the string', function() {
      var string = 'How are you doing';

      expect(string.wordCount()).toBe(4);
    });
  });

  describe('Test cases for toCurrency()', function() {
    it('Should returns a currency representation of the string', function() {
      var string = '11111.11';
      expect(string.toCurrency()).toMatch('11,111.11');
    });
  });

  describe('Test cases for fromCurrency()', function() {
    it('Should returns a currency representation of the string', function() {
      var string = '11111.11';
      expect(string.fromCurrency()).toMatch('11111.11');
    });
  });

  describe('Test cases for inverseCase()', function() {
    it('Should returns the string with each word in inverse case', function() {
      var string = 'Mr. Ben';
      expect(string.inverseCase()).toMatch('mR. bEN');
    });
  });

  describe('Test cases for alternatingCase()', function() {
    it('Should returns the varters in alternating cases', function() {
      var string = 'Onomatopoeia';
      expect(string.alternatingCase()).toMatch('oNoMaToPoEiA');
    });
  });

  describe('Test cases for numberWords()', function() {
    it('Should returns the numbers in words', function() {
      var string = '325';
      expect(string.numberWords()).toMatch('three two five');
    });
  });

  describe('Test cases for isDigit()', function() {
    it('Should return true if the string is a digit(one number)', function() {
      var string = '3';
      expect(string.isDigit()).toBeTruthy();
    });

    it('Should return false if the string is not a digit(one number)', function() {
      var string = '34';
      expect(string.isDigit()).toBeFalsy();
    });
  });
});
