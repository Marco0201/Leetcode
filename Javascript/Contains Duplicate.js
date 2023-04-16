// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

 

// Constraints:

//     1 <= nums.length <= 105
//     -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // for ( let right = 0; right < nums.length; right++){
    //     for (let left = 0; left < right; left++){
    //         isDupe = nums[left] === nums[right];
    //         if (isDupe) {
    //             return true
    //         }
    //     }
    // } return false

    // this solution uses a different approach. The function uses two nested loops to compare each pair of elements in the input array. The outer loop iterates over the array, from the first element to the last, while the inner loop iterates over the subarray to the left of the current element.

    // For each pair of elements, the function checks if they are equal. If they are, then the function returns true since we have found a duplicate. If we iterate through the entire array without finding a duplicate, then the function returns false.

    let check = new Set()
    for (let i of nums) {
        if (check.has(i)) {
            return true
        }
        check.add(i)
    }
    return false
};

// The function uses a Set data structure to keep track of the numbers that have been encountered so far as we iterate through the input array. If we encounter a number that's already in the set, we know that the array contains at least one duplicate, so we return true. If we iterate through the entire array without finding a duplicate, we return false.