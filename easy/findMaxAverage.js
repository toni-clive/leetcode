// https://leetcode.com/problems/maximum-average-subarray-i/

// Tags
// Array
// Sliding Window

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(array, k) {
    if(k==0 || array.length<k) return null
    let windownStart = 0;
    let currentSum =0
    let maxSum = -Infinity
    for (let i = 0; i < array.length; i++) {
        currentSum+=array[i]
        if(i>= k-1){
            // currentSum>maxSum? maxSum=currentSum: null
            maxSum = Math.max(currentSum,maxSum)
            currentSum-= array[windownStart]
            windownStart++
        }
        
    }
    return maxSum/k
};





console.log(findMaxAverage([1,12,-5,-6,50,3],4),12.75)