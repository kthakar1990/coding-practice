/*
Given a string, find the length of the longest substring without repeating characters.
Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 

Note that the answer must be a substring, "pwke" is a subsequence and not a substring. 
*/
function lengthOfLongestSubstring(s) {
    if (!s) {
        return 0;
    } else {
        var arr = s.split('');
        var globalMaxLength = 0;
        var currentMaxLength = 0;
        var map = new Map();

        for (var i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                i = map.get(arr[i]) + 1;
                // reset hash map
                map.clear();
                // reset currentMaxLength to 1
                currentMaxLength = 1;
                // set current value in hash map
                map.set(arr[i], i);
            } else {
                map.set(arr[i], i);
                currentMaxLength++;
                if (currentMaxLength > globalMaxLength) {
                    globalMaxLength = currentMaxLength
                }
            }
        }
    }
    return globalMaxLength;
};