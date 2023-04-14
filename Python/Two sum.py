# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.


# Example 1:

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

# Example 2:

# Input: nums = [3,2,4], target = 6
# Output: [1,2]

# Example 3:

# Input: nums = [3,3], target = 6
# Output: [0,1]


# Constraints:

#     2 <= nums.length <= 104
#     -109 <= nums[i] <= 109
#     -109 <= target <= 109
#     Only one valid answer exists.

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        answer = {}
        for i, num in enumerate(nums):
            if (target - num) in answer:
                return [answer[target - num], i]
            answer[num] = i


# In this solution, I will use a dictionary to keep track of the numbers we have seen so far. For each number, we check if the difference between the target and the current number is in the dictionary. If it is, we have found the two numbers that add up to the target, and we return their indices. If not, we add the current number to the dictionary and continue iterating through the array.
