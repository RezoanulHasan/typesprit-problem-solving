//our task is to simplify the consistency of a complex object structure using type aliases in TypeScript. Start by defining a user profile, comprising various attributes such as name, address, and email.

//Craft a type alias to represent partial changes to this complex structure, allowing for updating specific parts while maintaining integrity.

//Once the type alias is in place, create a function to update a user's profile using the provided partial changes, ensuring the type consistency of the modified user data.

//Lastly, put your structure to the test by updating a user's profile with new information and observe the modified user profile.

type UserProfile = {
    name: string;
    address: string;
    email: string;
    // Add other attributes as needed
  }
  
  type PartialUserProfile = Partial<UserProfile>;
  
  function updateUserProfile(user: UserProfile, changes: PartialUserProfile): UserProfile {
    return { ...user, ...changes };
  }
  
  const user: UserProfile = {
    name: "John Doe",
    address: "123 Main Street",
    email: "john@example.com"
  }
  
  const changes: PartialUserProfile = {
    address: "456 Oak Avenue",
    email: "john.doe@example.com"
  }
  
  const updatedUserProfile = updateUserProfile(user, changes);
  
  console.log(updatedUserProfile);
  