/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var newArray = []; //initializes array
    for (let i = 0; i<arr.length; i++){ //iterates over items in original array
        if (fn(arr[i], i)){ //takes function and evaluates against item in array at index i
            newArray.push(arr[i]) //adds in item to new array if function evaluates to true
        }
    }return newArray //return modified array
}
