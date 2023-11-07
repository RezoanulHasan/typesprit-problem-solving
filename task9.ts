//Develop a TypeScript function to retrieve specific details from an array of objects. Your task is to extract 'id' and 'name' properties, unveiling their concealed values.

//After crafting the function, apply it to an array of diverse objects. Showcase the extracted 'id' and 'name' details, revealing the secrets kept within these mysterious objects



interface MyObject {
    id: string;
    name: string;
    // Add other properties if needed
  }
  
  function extractDetails(objects: MyObject[]): { id: string; name: string }[] {
    return objects.map(obj => ({
      id: obj.id,
      name: obj.name,
    }));
  }
  const myObjects = [
    { id: '1', name: 'John Doe', age: 30 },
    { id: '2', name: 'Jane Smith', age: 25 },
    { id: '3', name: 'Bob Johnson', age: 35 },
  ];
  
  const extractedDetails = extractDetails(myObjects);
  
  console.log(extractedDetails);
  