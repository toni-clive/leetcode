// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    const sortNum = nums.sort((a,b)=>a-b)
    for(let i =0;i< sortNum.length;i++){
        if(sortNum[i]==sortNum[i+1]) return true
    }
    return false
};

var containsDuplicate = function(nums) {
    let seen = {}
    for(let i =0;i< nums.length;i++){
        if(seen[nums[i]]) return true
        seen[nums[i]] = true
    }
    return false
};

