/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], 
then return 0.

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0

Constraints:
-2^31 <= x <= 2^31 - 1
*/

var reverse = function(x) {
    const lowerLimit = -2147483648;
    const upperLimit = 2147483647;
    let str = x.toString();
    let isNegative = false;
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(0) === '-') {
            isNegative = true;
        }
        newStr = str.charAt(i) + newStr;
    }
    if (isNegative) {
        newStr = '-' + newStr;
    }
    let intValue = parseInt(newStr);
    if (intValue >= upperLimit) {
        return 0;
    } else if (intValue <= lowerLimit) {
        return 0;
    } else {
        return intValue;
    }
};