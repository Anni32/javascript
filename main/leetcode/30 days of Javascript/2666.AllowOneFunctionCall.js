var once = function(fn) {
    let callflag = false;
    let x; //creates variable to store result in

    return function(...args) {
        if (callflag === false) {  // Check if the function has not been called yet
            x = fn(...args); 
            callflag = true; //set call flag to true!
            return x; //x inside if statement so no calls after initial flag?
        }
    };
};
