function sumNumbers(mixedData: (number | string)[]): number {
    let total = 0;

    for (const item of mixedData) {
        if (typeof item === 'number') {
            total += item;
        }
    }

    return total;
}

const mixedData: (number | string)[] = [1, 'two', 3, 'four', 5];
const result = sumNumbers(mixedData);
console.log(result); 
