/*
Given an array of n integers nums and a target, 
find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

Example:

Input: nums = [-2,0,1,3], and target = 2
Output: 2 
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]
Follow up: Could you solve it in O(n2) runtime?
*/


// we sort the array and then take two pointers, one at the start and one at the end of array and take sum of those two numbers.. if initial sum < target,
// then we can increase first pointer towards right direction to find and add next values to make sure the new sum is still under target while adding those numbers to count
// if the sum goes over target then we reduce right side index and compare again

var threeSumSmaller = function(nums, target) {
    nums.sort(); // before beginning to use two pointers we are sorting this array, thus we have larger numbers towards end and smaller towards front
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        // we are sending array, left index which is initial (index + 1) and new target for smaller sum which is initial (target- last index value)
        count += smallerSum(nums, i + 1, target - nums[i]);
    }
    return count;
};

function smallerSum(nums, startIndex, newTarget) {
    let count = 0;
    let left = startIndex;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] < newTarget) {
            count += right - left;
            // while left is lesser, we can increase left hand side index towards greater values on sorted array
            left++;
        } else {
            right--;
        }
    }
    return count;
}

/*
Complexity analysis

Time complexity : O(n^2). The twoSumSmaller function takes O(n)time because both left and right traverse at most n steps. Therefore, the overall time complexity is O(n^2).

Space complexity : O(1).
*/