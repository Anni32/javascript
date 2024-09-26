/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let new1 = init;
    for (let i = 0; i<nums.length; i++){
        new1 = fn(new1, nums[i]);
    }
    if (nums.length === 0){
        return init;
    }else{
        return new1;
    }
}
