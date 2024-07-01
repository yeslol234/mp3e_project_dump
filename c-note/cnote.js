let crypto = require('crypto');
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function exponent(a, n) {
    for (var i = 0; i < n; i++) {
        a *= a
    }
    return a; // will return a once the loop above finishes.
}
function mod(a, b) {
    return a % b;
}
function encrypt(s) {
    let r;
    r += ".ed."
    r += crypto.randomUUID()
    r += ".dr."
    for (let i = 0; i < s.length; i++) {
        r += s.charCodeAt(i)
        r += "x"
    }
    r += ".ed."
    r += crypto.randomUUID()
    r += ".dr."
    return r
}
function decrypt(r) {
    // Split the encrypted string into parts based on ".ed." and ".dr."
    const parts = r.split(".ed.");

    if (parts.length < 3) {
        // Invalid encrypted string, cannot decrypt
        return null;
    }

    // Extract the encrypted data between ".ed." and ".dr."
    const encryptedData = parts[1];

    // Split the encrypted data into individual characters
    const encryptedChars = encryptedData.split("x");

    // Convert the encrypted characters back to their original char codes
    const decryptedChars = encryptedChars.map(char => String.fromCharCode(parseInt(char, 10)));

    // Join the characters to get the original string
    const decryptedString = decryptedChars.join("");

    // Remove the random character at the beginning
    const originalString = decryptedString.slice(1);

    return originalString;
}

// Example usage:
const encryptedString = "SomeEncryptedStringHere";
const encryptedResult = encrypt(encryptedString);
console.log("Encrypted:", encryptedResult);
const decryptedResult = decrypt(encryptedResult);
console.log("Decrypted:", decryptedResult);

