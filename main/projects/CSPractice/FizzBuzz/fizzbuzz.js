//Write a program that takes a user’s input and prints the numbers
//from one to the number the user entered. However, for multiples 
//of three print Fizz instead of the number and for the multiples
//of five print Buzz. For numbers which are multiples of both three
//and five print FizzBuzz.

//Jason Arnold


//CODE FOR FUNCTION TO FIND 3

//CODE FOR PRINT TO WEBPAGE AND INPUT
function FizzBuzz(wi){
    for (let i = 1; i <= wi; i++){
        if(i%3===0 && i%5===0){
            console.log("fizzbuzz");
        }
        else if(i%5===0){
            console.log("buzz");
        }
        else if(i%5===0){
            console.log("fizz");
        }
        else{
            console.log(i)
        }
    }
}

FizzBuzz(100)