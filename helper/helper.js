function convertToUppercase(character) {
  var characterUnicode = character.charCodeAt(0); //get the UNICODE equivalent of Character
  /*
    The difference between A-Z Unicode and a-z Unicode is 32
    if the characterUnicode is within a-z, find the equivalent A-Z by subtractin 32 
    from its Unicode and return the alphabet with formCharCode string method
  */
  if (characterUnicode > 96 && characterUnicode < 123) {
    return (character = String.fromCharCode(characterUnicode - 32));
  }
  return character;
}

function convertToLowercase(character) {
  var characterUnicode = character.charCodeAt(0); //get the UNICODE equivalent of Character
  /*
    if the characterUnicode is within a-z, find the equivalent A-Z by adding 32 
    to its Unicode and return the alphabet with formCharCode string method
  */
  if (characterUnicode > 63 && characterUnicode < 91) {
    return (character = String.fromCharCode(characterUnicode + 32));
  }
  return character;
}

module.exports = { convertToUppercase, convertToLowercase };
