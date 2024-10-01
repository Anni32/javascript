const maxValue = (nums) => {
  max = nums[0] 
  for (let i = 0; i<nums.length; i++){
    if (nums[i]>max){ //if the value of the item in the list is greater than current max val
      max = nums[i] //take num[i] and make it the new max
    }
  }return max
};

module.exports = {
  maxValue,
};
