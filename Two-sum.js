/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    if (nums.length > 0) {
        let map = new Map();
        for (var i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (map.has(complement)) {
                return [map.get(complement), i];
            } else {
                map.set(nums[i], i);
            }
        }
    }
};

// console.log(twoSum([5, 3, 4, 6, 1], 10));