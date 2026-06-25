// https://leetcode.com/problems/minimum-size-subarray-sum/description/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(n, array) {
//         let sum = 0
//     let windowSize = Infinity
//     let start = 0
//     for (let i = 0; i < array.length; i++) {
//         sum+= array[i]
 
//             while(sum>=n){
//                    windowSize = Math.min(windowSize,i-start+1)
//                 sum-=array[start]
//                 start++
       
//         }
        
//     }
//     return windowSize == Infinity ? 0: windowSize
// };

console.log(minSubArrayLen(7,[2,3,1,2,4,3]),2)

// console.log(minSubArrayLen([2, 1, 5, 2, 3, 2],7 ),2)

// console.log(minSubArrayLen([2, 1, 5, 2, 8],7 ),1)

// console.log(minSubArrayLen([3, 4, 1, 1, 6], 8 ),3)