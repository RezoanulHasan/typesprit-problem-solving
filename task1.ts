function processStringOrNumber(input: string | number): number {
    if (typeof input === 'string') {
        return input.length;
    } else if (typeof input === 'number') {
        return input * input;
    } else {
        throw new Error('Input must be a string or a number');
    }
}

const strLengthNumSquare = processStringOrNumber("REZOANUL"); 
console.log(strLengthNumSquare);

