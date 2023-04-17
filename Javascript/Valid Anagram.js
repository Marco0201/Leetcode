// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

 

// Constraints:

//     1 <= s.length, t.length <= 5 * 104
//     s and t consist of lowercase English letters.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    } else {
        let checkS = {}
        let checkT = {}
        for(let i = 0; i < s.length; i++) {
            checkS[s[i]] = (checkS[s[i]] || 0) + 1;
            checkT[t[i]] = (checkT[t[i]] || 0) + 1;   
        }
        for (const [key, value] of Object.entries(checkS)) {
            if (checkT[key] !== value) {
                return false
            } 
        }
    } return true

    
};

// To solve this problem, we can first check if the length of the two strings are equal. If not, then they cannot be anagrams of each other.

// If the lengths are equal, we can create a frequency counter for each string, which counts the number of occurrences of each letter in the string. We can then compare the frequency counters of the two strings. If they are equal, then the two strings are anagrams of each other.

// we first check if the length of the two strings are equal. If not, we return false.

// If the lengths are equal, we create two frequency counters checkS and checkT for the two strings. We iterate through each character in the two strings and update the corresponding frequency count in their respective frequency counters.

// Finally, we iterate through the keys of checkS and check if the corresponding values in checkT are equal. If they are not, then the two strings are not anagrams and we return false.

// If we have iterated through all the keys and their corresponding values are equal, then the two strings are anagrams and we return true.