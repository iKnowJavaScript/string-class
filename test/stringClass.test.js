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
});
