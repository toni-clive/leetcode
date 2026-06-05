// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Tags 
// Staff 
// Hash Table 
// String 
// Sliding Window

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<=1) return s.length
    let chars = new Set()
    
    let maxWindow = 0
    let currentWindow = 0
    for (let i = 0; i < s.length; i++) {
        if(chars.has(s[i])){
            // maxWindow<currentWindow?maxWindow = currentWindow:maxWindow = maxWindow

            while(chars.has(s[i])){
                
                chars.delete(s[i-currentWindow])
                currentWindow--;
            }
            chars.add(s[i])
            currentWindow++
        }
        else{
            chars.add(s[i])
            currentWindow++
                        maxWindow<currentWindow?maxWindow = currentWindow:maxWindow = maxWindow

        }
    }
    return maxWindow
};

console.log(lengthOfLongestSubstring("aab"),2)
console.log(lengthOfLongestSubstring("pwwkew"),3)
console.log(lengthOfLongestSubstring("bbbbb"),1)
console.log(lengthOfLongestSubstring("abcabcbb"),3)