function upperAndLowerConverter(character) {
  var characterUnicode = character.charCodeAt(0); //get the UNICODE equivalent of Character
  /*
    character Unicode of A-Z is 65-90
    character Unicode of a-z is 97-122
    The difference between A-Z Unicode and a-z Unicode is 32
    if the characterUnicode is within a-z, find the equivalent A-Z by subtractin 32 
    from its Unicode and return the alphabet with formCharCode string method
    and opposite for A-Z
  */
  if (characterUnicode > 96 && characterUnicode < 123) {
    return (character = String.fromCharCode(characterUnicode - 32));
  } else if (characterUnicode > 63 && characterUnicode < 91) {
    return (character = String.fromCharCode(characterUnicode + 32));
  } else {
    return character;
  }
}

module.exports = { upperAndLowerConverter };
