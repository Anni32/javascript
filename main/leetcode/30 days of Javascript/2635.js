/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = [];  // Initialize array
    for (let i = 0; i < arr.length; i++) { //iterates over number of items in array
        returnedArray.push(fn(arr[i], i)); //"pushes" the value, and it's index (arr[i], i) to the returnedarray array
    }
    return returnedArray; //returns the array
};
