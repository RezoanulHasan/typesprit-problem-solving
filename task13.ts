
//Your objective is to create a function in TypeScript that seamlessly merges properties from distinct objects using the spread operator.

//Define a function that takes two separate objects and fuses their properties together, creating a singular object that encapsulates the combined attributes.

//After crafting the function, apply it to blend properties from two example objects. Witness the merged object, a testament to the successful fusion of individual properties into a unified entity.
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  // Example objects
  const object1 = { name: "John", age: 30 };
  const object2 = { city: "New York", country: "USA" };
  
  // Merge the objects
  const mergedObject = mergeObjects(object1, object2);
  
  console.log(mergedObject);
  