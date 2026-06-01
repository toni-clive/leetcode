// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let lps = [0]
  let current = 0
  for (let i = 1; i < needle.length; i++) {
    if(needle[current]== needle[i]){
        current++
    }
    else{
        while(current > 0 && needle[i] != needle[current]){
                current = lps[current-1]
            if(needle[current]==needle[i]){
                current++;
                break
            }
        }
    }
    
    
    lps.push(current>-1?current:current=0)
  }
  let j= 0;
  let matches = []
  let i =0
  while(i<haystack.length) {
    if(haystack[i]==needle[j]){
        j++;
        i++;
        if(j==needle.length){

           matches.push(i-j)
            j = lps[j-1]
        }
    }
    else{
     if(j!=0){
        j = lps[j-1]
     }
     else{
        i++
     }
    }
  }
  return matches.length?matches[0]:-1
};

console.log(strStr("mississippi",
"issip"))
