/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) { //defines createCounter, which includes methods increment, decrement, and reset
    var reset = init //creates a variable from the passed value
    return{
        increment: function(){
            init++ //passed value + 1
             return init
        },
        decrement: function(){
            init-- //passed value - 1
             return init
        },
        reset: function(){
            init = reset; //sets init back to inital reset
             return init //returns init
        }
    }
};
