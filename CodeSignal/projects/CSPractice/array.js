// For input Array:
//Function that iterates through array:
function arraypractice(x){
    score = 0 //defines score variable
    for (let i = 0; i < x.length-1; i++){ //iterates through number of items in array
        console.log(x[i]+x[i+1], x[i] + " and " + x[i+1]);
        if(x[i]+x[i+1] > score){ //checks current value against stored value in score
            score = x[i]+x[i+1] //prints score for testing and confirmation
        }
    }
    return console.log(score)
}

//defined array and input to function
inputArray = [42, 6, 522, -55, 7, 32]
arraypractice(inputArray)