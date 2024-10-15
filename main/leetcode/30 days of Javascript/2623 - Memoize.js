/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}; //creates the cache
    return function (...args) {
        const key = JSON.stringify(args); //args -->  key (STRINGAFIED)
        if (key in cache) { // if the current value of key is in the cache
            return cache[key]; //return the value of key in {cache}
        }
        const functionOutput = fn(...args); //defines function output using fn w/ args
        cache[key] = functionOutput; //at cache value key add output of function
        return functionOutput; //return the output of the function
    }
}
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
