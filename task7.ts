
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