// https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n>0 &&  (n & (n-1)) == 0
};
console.log(isPowerOfTwo(-2147483648
),false)