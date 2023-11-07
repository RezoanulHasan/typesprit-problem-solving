//Explore safe navigation through nested object properties using TypeScript's optional chaining feature.

//Given an interface defining user details with optional address attributes, showcase the usage of optional chaining to access these nested properties securely. Illustrate how optional chaining prevents potential errors when properties are absent, displaying the result of accessing these nested attributes.


interface UserDetails {
    name: string;
    age: number;
    address?: {
      street?: string;
      city?: string;
      postalCode?: string;
    };
  }
  


// Example user object with address details
const users: UserDetails = {
    name: "John Doe",
    age: 30,
    // address property is optional
    // street, city, and postalCode are optional within address
    // Comment out any of these properties to see optional chaining in action
    address: {
      street: "123 Main Street",
      city: "New York",
      postalCode: "10001"
    }
  };
  
  // Using optional chaining to access nested properties
  const street = users.address?.street;
  const city = users.address?.city;
  const postalCode = users.address?.postalCode;
  
  console.log(`Street: ${street}`); // Output: Street: 123 Main Street
  console.log(`City: ${city}`); // Output: City: New York
  console.log(`Postal Code: ${postalCode}`); // Output: Postal Code: 10001
  

