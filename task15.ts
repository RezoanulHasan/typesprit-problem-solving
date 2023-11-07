//Develop a higher-order function in TypeScript that operates on various types of values. The function should accept a value of either a number or a string, triggering a callback function to process this versatile input.

//Create a higher-order function that takes in a value and executes a callback to perform different operations based on the type of value. Show how it handles both numbers and strings, triggering distinct actions accordingly.

//Demonstrate the function's capabilities by processing different values, showcasing its flexibility in dealing with both numeric and string data.


type ValueCallback = (value: number | string) => void;

function processValue(value: number | string, callback: ValueCallback) {
  callback(value);
}

// Example callback functions
function handleNumber(value: number | string) {
  if (typeof value === 'number') {
    console.log(`Received a number: ${value}`);
  } else {
    console.log(`Expected a number, but received a string: ${value}`);
  }
}

function handleString(value: number | string) {
  if (typeof value === 'string') {
    console.log(`Received a string: ${value}`);
  } else {
    console.log(`Expected a string, but received a number: ${value}`);
  }
}

// Using the higher-order function with different values
processValue(42, handleNumber); // Output: Received a number: 42
processValue("Hello", handleString); // Output: Received a string: Hello
