//Develop a TypeScript function that effortlessly adds together any number of numerical values passed to it. This function should neatly calculate their sum, showcasing its ability to handle different quantities of numbers.

//Demonstrate the function by calculating the sum of various sets of numbers, highlighting its flexibility in processing variable inputs.
function addNumbers(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  const sum1 = addNumbers(1, 2, 3); // Sum: 6
const sum2 = addNumbers(10, 20, 30, 40); // Sum: 100
const sum3 = addNumbers(5, 10, 15, 20, 25); // Sum: 75

console.log(sum1); // Output: 6
console.log(sum2); // Output: 100
console.log(sum3); // Output: 75
