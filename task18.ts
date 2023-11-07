//You are tasked with developing a transaction processing function, processTransaction, handling parameters such as amount and currency. The amount parameter signifies the transaction value and can be a number or null, while the currency parameter represents the user's preferred currency and can be a string or undefined.

//Create the processTransaction function to address these arguments. Use the nullish coalescing operator (??) to set default values for amount and currency. Your task is to output a message summarizing the transaction details based on these parameters, displaying the default values when necessary.

//The function's criteria are as follows:

//When the amount is null, set a default value of 0.
//If the currency is undefined, assign a default value of 'USD'.
//Log a message detailing the transaction amount and the user's currency, utilizing either the provided or default values.

//Apply the processTransaction function using various input values to demonstrate how it handles the nullish coalescing operator for default value assignment.


function processTransaction(amount: number | null, currency?: string): void {
    const processedAmount = amount ?? 0;
    const processedCurrency = currency ?? 'USD';
  
    console.log(`Transaction Details:
      Amount: ${processedAmount}
      Currency: ${processedCurrency}
    `);
  }
  processTransaction(null); // Output: Transaction Details: Amount: 0, Currency: USD

processTransaction(50, 'EUR'); // Output: Transaction Details: Amount: 50, Currency: EUR

processTransaction(null, 'JPY'); // Output: Transaction Details: Amount: 0, Currency: JPY

processTransaction(100); // Output: Transaction Details: Amount: 100, Currency: USD
