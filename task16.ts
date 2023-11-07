//Create a TypeScript function using the ternary operator to determine and assign values based on specific conditions.

//Craft a function that checks a numerical value and returns a string, determining whether the provided value is greater than 10 or not. Employ the power of the ternary operator to make this determination, showcasing its conditional assignment capabilities.

//Illustrate the function's prowess by checking various numerical values and printing the corresponding outcome based on their comparison to the number 10.
function checkGreaterThanTen(value: number): string {
    return value > 10 ? "Greater than 10" : "Not greater than 10";
  }
  console.log(checkGreaterThanTen(5)); // Output: "Not greater than 10"
console.log(checkGreaterThanTen(15)); // Output: "Greater than 10"
console.log(checkGreaterThanTen(10)); // Output: "Not greater than 10"
