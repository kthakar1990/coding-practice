/*
Rotational Cipher
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
Given a string and a rotation factor, return an encrypted string.
Signature
string rotationalCipher(string input, int rotationFactor)
Input
1 <= |input| <= 1,000,000
0 <= rotationFactor <= 1,000,000
Output
Return the result of rotating input a number of times equal to rotationFactor.
Example 1
input = Zebra-493?
rotationFactor = 3
output = Cheud-726?
Example 2
input = abcdefghijklmNOPQRSTUVWXYZ0123456789
rotationFactor = 39
output = nopqrstuvwxyzABCDEFGHIJKLM9012345678
*/

/* Questions:
1. will string have non-alphanumeric characters - yes and they need to be unchanged
2. can rotation factor be 0 or above 25
*/

function rotationalCipher(str, key) {
    // Write your code here
    let cipher = '';

    //decipher each letter
    for (let i = 0; i < str.length; i++) {

        if (isNumeric(str[i])) {
            cipher += String.fromCharCode(((str.charCodeAt(i) + key - 48) % 10 + 48));
        } else if (isSpecialCharacter(str[i])) {
            cipher += str[i]
        }
        //if letter is uppercase then add uppercase letters
        else if (isUpperCase(str[i])) {
            cipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
        } else {
            //else add lowercase letters
            cipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
        }
    }

    return cipher;

    //check if letter is uppercase
    function isUpperCase(str) {
        return str === str.toUpperCase();
    }

    function isSpecialCharacter(str) {
        return str.match(/\W|_/g);
    }

    function isNumeric(str) {
        return str.match(/^\d+$/)
    }
}

// console.log(rotationalCipher("Zebra-493", 3));
// console.log(rotationalCipher("abcdefghijklmNOPQRSTUVWXYZ0123456789", 39));