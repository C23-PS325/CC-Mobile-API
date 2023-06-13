// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const CryptoJS = require('crypto-js');

console.log("Welcome to Programiz!");
const decryptWithAES = (ciphertext) => {
  const passphrase = '123';
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

U2FsdGVkX1/XvO4obOmZs/RJHyuUVdnancp63sQLerw=