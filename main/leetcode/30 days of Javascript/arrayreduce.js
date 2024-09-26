/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let new1 = init //assigns variable new1 value of init
    for (let i = 0; i<nums.length; i++){
        new1 = fn(new1, nums[i]); //sets new1 to be modified by reducer fn()
    }
    if (nums.length === 0){ //if the array is empty
        return init //return initial value
    }else{
        return new1 //return function modified value
    }
}
