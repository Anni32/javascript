//a < b > c or a > b < c

function solution(numbers) {
    count = []
    for (let i=0; i < numbers.length-2; i++){
        if (numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2] || numbers[i] > numbers[i+1] && numbers[i+1] < numbers[i+2]){
            count.push(1)
        }else{
            count.push(0)
        }
    }
    return count
}

//array1 = [4,6,2,3]
//solution(array1)