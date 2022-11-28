//Main Program
import { Client } from "./Client.js";
import { Account } from "./Account.js";

 
const client1 = new Client('Anderson Silva','123.456.789-01');
const account1 = new Account(client1,2305); //Creating a new class-type object.

const client2 = new Client('Alice Redqueen','011.234.567-89');
const account2 = new Account(client2,2305);


const depositValue = 450, transferValue = 200;

console.log(`Account 1 deposit ${depositValue} dollars:`);
account1.deposit(depositValue);
console.log(account1.user.name,` Saldo: ${account1.balance}.`);

console.log(`Account 1 transfers ${transferValue} dollars to account 2:`);
account1.transfer(transferValue, account2);
console.log(account1.user.name, account1.user.id, ` Saldo: ${account1.balance}.`);
console.log(account2.user.name, account2.user.id, ` Saldo: ${account2.balance}.`);
console.log(`ByteBank has ${Account.accountCounter} account(s) at the moment.`);
