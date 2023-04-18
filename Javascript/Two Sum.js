// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

 

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numbers = {}
    for( let i = 0; i < nums.length; i++) {
        check = target - nums[i]
        if( check in numbers ) {
            return [numbers[check], i]
        }
        numbers[nums[i]] = i
    }
};

//  this function uses a hash table (i.e., the numbers object) to store the numbers we have encountered while iterating through the nums array. For each number in nums, we check if the complement of that number (i.e., the difference between target and the number) has been encountered before by looking it up in the numbers object. If it has, then we have found the two numbers that add up to target, so we return their indices. If not, we add the current number to the numbers object so we can later check if its complement has been encountered before.