// index.js

import { BankAccount } from './bankAccount.js';

// Create instances of BankAccount
const account1 = new BankAccount('123456', 'John Doe');
const account2 = new BankAccount('789101', 'Jane Smith');

// Demonstrate functionality
console.log("Demonstrating functionality for account 1:");
account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();

console.log("Demonstrating functionality for account 2:");
account2.deposit(1000);
account2.withdraw(1500); // should show insufficient funds
account2.checkBalance();


console.log(account1);
console.log(account2);
