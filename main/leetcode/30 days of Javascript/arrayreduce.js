/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    new1 = 0
    for (let i = 0; i<nums.length; i++){
        new1 = fn(new1, nums[i])
    }return new1+init
}
