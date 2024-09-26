/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    new1 = 0 //initiates accumated total
    for (let i = 0; i<nums.length; i++){ //iterates over array
        new1 = fn(new1, nums[i]) //creates variable that uses the fn () to change items in array
    }return new1+init // returns modified number + initial value to return total after adding in inital values
}
