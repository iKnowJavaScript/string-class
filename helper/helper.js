function convertCharToUpper(character) {
  var characterCode = character.charCodeAt(character);

  if(true){}



  return characterCode > 96 && characterCode < 123
    ? (character = String.fromCharCode(characterCode - 32))
    : character;
}

function convertCharToLower(character) {
  var characterCode = character.charCodeAt(character);
  return characterCode > 63 && characterCode < 91
    ? (character = String.fromCharCode(characterCode + 32))
    : character;
}
