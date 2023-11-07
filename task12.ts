//Your goal is to create a function in TypeScript that only accepts specific values as parameters, ensuring strict control over the allowed inputs using literal types and enums.

//First, demonstrate the usage of literal types by crafting a function that handles only predefined sizes such as "small," "medium," or "large."

//Next, explore the world of enums by defining a type that encapsulates the same set of sizes, guaranteeing that only enumerated values are permissible as function inputs.

//Finally, utilize these functions to demonstrate their restricted acceptance of allowed values and the rejection of any unauthorized inputs, illustrating TypeScript's strict control over the permitted parameters.
// Using Literal Types
type Size = "small" | "medium" | "large";

function handleSize(size: Size) {
  console.log(`Handling ${size} size...`);
}

// Test cases
handleSize("small"); // Valid
handleSize("medium"); // Valid
handleSize("large"); // Valid
// handleSize("extra-large"); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'Size'.

// Using Enums
enum SizeEnum {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

function handleSizeEnum(size: SizeEnum) {
  console.log(`Handling ${size} size...`);
}

// Test cases
handleSizeEnum(SizeEnum.Small); // Valid
handleSizeEnum(SizeEnum.Medium); // Valid
handleSizeEnum(SizeEnum.Large); // Valid
// handleSizeEnum("extra-large"); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'SizeEnum'.
