//Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.
interface Product {
    name: string;
    price: number;
    quantity: number;
}

function calculateTotalCost(products: Product[]): number {
    let totalCost = 0;

    for (const product of products) {
        totalCost += product.price * product.quantity;
    }

    return totalCost;
}

const cart: Product[] = [
    { name: 'Item 1', price: 11, quantity: 2 },
    { name: 'Item 2', price: 10, quantity: 1 },
    { name: 'Item 3', price: 10, quantity: 3 }
];

const totalCost = calculateTotalCost(cart);
console.log(`Total Cost: $${totalCost}`);