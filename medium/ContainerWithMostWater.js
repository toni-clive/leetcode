/**
 * @param {number[]} height
 * @return {number}
 */

// applied area formula (right-left)Math.min(firstHeight,secondHeight)
var maxArea = function (height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length-1
  while (left<right) {
    let currentWater = (right-left) * Math.min(height[left], height[right]);
    currentWater > maxWater ? (maxWater = currentWater) : (maxWater = maxWater);
    if(height[left]<=height[right]){
left++
    }
    else{
        right--
    }
  }
  return maxWater;
};

console.log(maxArea([8, 7, 2, 1]), 7);
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
