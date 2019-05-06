//Type definitions for Jest
//npm install @types/jest

describe("Testing the Extended methods added to String Prototype", function() {
  describe("Testing hasVowels()", function() {
    it("Should return true if the string contains vowels", function() {
      let string = "Vowel is here";
      expect(string.hasVowels()).toBeTruthy();
    });
    it("Should return true if the string contains vowels", function() {
      let string = "gypt";
      expect(string.hasVowels()).toBeFalsy();
    });
  });
  describe("Test cases for toUpper()", function() {
    it("Should return the string in capital letter", function() {
      let string = "All in Capital";
      expect(string.toUpper()).toMatch("ALL IN CAPITAL");
    });
  });
  describe("Test cases for toLower()", function() {
    it("Should return the string in lowercase form", function() {
      let string = "ALL IN LOWERCASE";
      expect(string.toLower()).toMatch("all in lowercase");
    });
  });
  describe("Test cases for ucFirst()", function() {
    it("Should return the string Capitalizing first letter", function() {
      let string = "capitalise";
      expect(string.ucFirst()).toMatch("Capitalise");
    });
  });
  describe("Test cases for isQuestion()", function() {
    it("Should return true if the string is a valid question sectence", function() {
      let string = "How are you doing?";
      expect(string.isQuestion()).toBeTruthy();
    });
    it("Should return false if the string is not a valid question sectence", function() {
      let string = "How are you doing";
      expect(string.isQuestion()).toBeFalsy();
    });
  });
  describe("Test cases for words()", function() {
    it("Should return array of words in the string", function() {
      let string = "capitalise";
      expect(string.words()).toContainEqual("Capitalise");
      expect(string.words()).toHaveLength(string.length);
    });
  });
  describe("Test cases for wordCount()", function() {
    it("Should return number of words in the string", function() {
      let string = "capitalise";
      expect(string.wordCount()).toHaveLength(10);
    });
  });
  describe("Test cases for toCurrency()", function() {
    it("Should returns a currency representation of the string", function() {
      let string = "11111.11";
      expect(string.toCurrency()).toMatch("11,111.11");
    });
  });
});
