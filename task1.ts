//Develop a TypeScript function to retrieve specific details from an array of objects. Your task is to extract 'id' and 'name' properties, unveiling their concealed values.

//After crafting the function, apply it to an array of diverse objects. Showcase the extracted 'id' and 'name' details, revealing the secrets kept within these mysterious objects



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

