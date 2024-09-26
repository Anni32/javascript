/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let new1 = init;
    for (let i = 0; i<nums.length; i++){
        new1 = fn(new1, nums[i]); //sets new1 to be the fn() modified new value
    }
    if (nums.length === 0){ //if empty array
        return init; //return init value
    }else{
        return new1; //return func modified value
    }
}
