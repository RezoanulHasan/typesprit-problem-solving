//Implement TypeScript function overloading using conditional types, allowing different argument types to be processed accordingly.

//Demonstrate how conditional types facilitate function overloading, enabling a single function to handle various argument types and execute distinct logic based on the provided type. The example function showcases different behaviors for string and number inputs, transforming strings to uppercase and doubling numbers, respectively.

//Illustrate the use of this overloaded function by passing different argument types and exhibiting the distinct processing for each type, validating the versatility provided by conditional type-based function overloading.type ProcessInput<T> = T extends string ? string : T extends number ? number : never;
type ProcessInput<T> = T extends string ? string : T extends number ? number : never;

function process(input: string): string;
function process(input: number): number;
function process(input: ProcessInput<any>): ProcessInput<any> {
  if (typeof input === 'string') {
    return input.toUpperCase() as ProcessInput<any>;
  } else if (typeof input === 'number') {
    return input * 2 as ProcessInput<any>;
  } else {
    throw new Error('Unsupported input type');
  }
}


const result1 = process("hello"); // result1 is of type string
const result2 = process(5); // result2 is of type number

// Uncomment the line below to see an error, as the function doesn't support boolean input
// const result3 = process(true);
