//Create a function in TypeScript designed to process 'unknown' type inputs safely.

//Develop a function that effectively handles different 'unknown' types by using conditional checks to determine whether the input is a number, string, or an unknown type or value. This approach ensures safe handling of the 'unknown' input type, preventing potential errors.

//Demonstrate the function's capabilities by passing varied 'unknown' inputs, displaying the specific handling based on the identified type or highlighting the 'unknown' type when ambiguous.

function processUnknown(input: unknown): void {
    if (typeof input === 'number') {
      console.log(`Received a number: ${input}`);
    } else if (typeof input === 'string') {
      console.log(`Received a string: ${input}`);
    } else {
      console.log(`Received an unknown type: ${input}`);
    }
  }

  
  processUnknown(42); // Output: Received a number: 42
  processUnknown("Hello"); // Output: Received a string: Hello
  processUnknown(true); // Output: Received an unknown type: true
  processUnknown({}); // Output: Received an unknown type: [object Object]
  