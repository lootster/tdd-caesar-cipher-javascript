const TOTAL_ALPHABETS = 26;
const CHAR_CODE_OF_BIG_A = 65;
const CHAR_CODE_OF_SMALL_A = 97;
const CHAR_CODE_OF_BIG_Z = 90;
const CHAR_CODE_OF_SMALL_Z = 122;

function CaesarCipher(str, num) {

  // Num must be within alphabetical range 
  if (num < 0) return CaesarCipher(str, num + TOTAL_ALPHABETS);

  let output = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // If it's a letter...
    if (char.match(/[a-z]/i)) {
      
      // Get code of character
      let code = str.charCodeAt(i);

      if (isUpperCase(code)) {
        char = cipherToUpperCase(code, num);
      } 
      else if (isLowerCase(code)) {
        char = cipherToLowerCase(code, num);
      }
    }

    output += char;
  }

  return output;
}

function isUpperCase(code) {
  return code >= CHAR_CODE_OF_BIG_A && code <= CHAR_CODE_OF_BIG_Z;
}

function isLowerCase(code) {
  return code >= CHAR_CODE_OF_SMALL_A && code <= CHAR_CODE_OF_SMALL_Z;
}

function cipherToUpperCase(code, num) {
  return String.fromCharCode(
    ((code - CHAR_CODE_OF_BIG_A + num) % TOTAL_ALPHABETS) + 
      CHAR_CODE_OF_BIG_A
  );
}

function cipherToLowerCase(code, num) {
  return String.fromCharCode(
    ((code - CHAR_CODE_OF_SMALL_A + num) % TOTAL_ALPHABETS) +
      CHAR_CODE_OF_SMALL_A
  );
}

module.exports = CaesarCipher;
