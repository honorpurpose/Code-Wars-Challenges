// Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

function divisibleBy(numbers, divisor){
    return numbers.filter(v => v % divisor === 0)
}


// best answer 

function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }