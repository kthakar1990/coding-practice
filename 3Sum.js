/* Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        if (i == 0 || nums[i - 1] != nums[i]) {
            twoSumII(nums[i], nums, i, res);
        }
    }
    return res;
};

function twoSumII(num, nums, i, res) {
    let index1 = i + 1;
    let index2 = nums.length - 1;
    while (index1 < index2) {
        let sum = nums[i] + nums[index1] + nums[index2];
        if (sum < 0 || (index1 > i + 1 && nums[index1] == nums[index1 - 1])) {
            index1++;
        } else if (sum > 0 || (index2 < nums.length - 1 && nums[index2] == nums[index2 + 1])) {
            index2--;
        } else {
            res.push([num, nums[index1++], nums[index2--]]);
        }
    }
    return;
}