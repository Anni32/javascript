const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) { //iterates through 2 to sqrt of n
    if (n % i === 0) { //if any other number is equally divisible 
      return false; 
    }
  }

  return true; //if the above conditions aren't applicable mark true
};

module.exports = {
  isPrime,
};
