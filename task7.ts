//Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

// Example usage:

//const numbers: number[] = [1, 2, 3, 4, 5, 2];

//const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

//const targetNumber = 2;

//const targetString = "cherry";

//const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

//const indexInStrings = findFirstOccurrence(strings, targetString);

//console.log(indexInNumbers); //output:  1

//console.log(indexInStrings); //output: 2


function findFirstOccurrence<T>(array: T[], target: T): number {
    const index = array.indexOf(target);
    return index;
}


const numbers: number[] = [1, 2, 3, 4, 5, 2];
const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;
const targetString = "cherry";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
const indexInStrings = findFirstOccurrence(strings, targetString);

console.log(indexInNumbers); 
console.log(indexInStrings); 