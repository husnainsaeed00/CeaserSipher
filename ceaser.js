function caesarCipher(str, shift) {
    return str
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          let code = char.charCodeAt(0);
          let isUpperCase = char === char.toUpperCase();
          let offset = isUpperCase ? 65 : 97;
          code = (code - offset + shift) % 26 + offset;
          return String.fromCharCode(code);
        }
        return char;
      })
      .join('');
  }
  
  const text = 'Hello, World!';
const shift = 3;
const encryptedText = caesarCipher(text, shift);
console.log(encryptedText); // Output: 'Khoor, Zruog!'
