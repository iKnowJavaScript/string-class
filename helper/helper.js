function upperAndLowerConverter(character) {
  var characterCode = character.charCodeAt(character);

  if (characterCode > 96 && characterCode < 123) {
    return (character = String.fromCharCode(characterCode - 32));
  } else if (characterCode > 63 && characterCode < 91) {
    return (character = String.fromCharCode(characterCode + 32));
  } else {
    return character;
  }
}

module.exports = { upperAndLowerConverter };
