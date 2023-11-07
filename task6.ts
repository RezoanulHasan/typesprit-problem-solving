function isArrayOfNumbers(value: unknown): value is number[] {
    return Array.isArray(value) && value.every(item => typeof item === 'number');
}

function calculateLogSum(value: unknown) {
    if (isArrayOfNumbers(value)) {
        const sum = value.reduce((acc, num) => acc + num, 0);
        console.log(`Sum of numbers: ${sum}`);
    } else {
        console.error('Error: Parameter is not an array of numbers');
    }
}

const validArray = [1, 1, 1];
calculateLogSum(validArray); 
