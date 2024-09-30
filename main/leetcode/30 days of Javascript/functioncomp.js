/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) { //iterates backwards through functions
            x = functions[i](x); //applies each func. to x
        }
        return x; //after looping returns x after all functions have been applied
    };
};
