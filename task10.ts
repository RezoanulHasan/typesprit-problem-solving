//Your challenge is to create a TypeScript function that turns an array of key-value pairs into a neatly organized object. Weave a function that seamlessly merges the keys and values from the array, transforming them into a structured object.

//Once your function is crafted, apply it to an array filled with various key-value pairs. Witness the array's shift into a tidy and structured object, showcasing its newfound form.


function createObjectFromKeyValuePairs<T>(pairs: [string, T][]): Record<string, T> {
    const result: Record<string, T> = {};
    for (const [key, value] of pairs) {
      result[key] = value;
    }
    return result;
  }
  
  const keyValuePairs: [string, string | number][] = [
    ['name', 'John Doe'],
    ['age', 30],
    ['city', 'New York'],
  ];
  
  const structuredObject = createObjectFromKeyValuePairs(keyValuePairs);
  
  console.log(structuredObject);
  
  