import { Client } from "./Client.js";

//Class account
export class Account {
  static accountCounter=0; //This type of variable was created to keep the current value 
  branch;
  #user;
  #balance = 0;

  set userSet(newUser){ //This is an accessor and a setter(attribution) declaration
    if(newUser instanceof Client){ //"instanceof" is a term to verify if the object is an instance.
      this.#user = newUser;
    }
  }
  get user(){ //This is an accessor and a getter declaration
    return this.#user;
  }
  get balance(){
    return this.#balance;
  }
  constructor(user,branch){ //Constructor of class Account.
    this.branch = branch;
    this.userSet = user;
    Account.accountCounter++; //This is how you access a static variable;
  }
  deposit(value){
    if(value<0){
      return 'This is an invalid value. Please, type a valid number.'; //early return example
    }
    this.#balance += value;
    return this.#balance;
  }
  withdraw(value){
    if(value>this.#balance){
      return "You don't have enough balance.";
    }
    this.#balance -= value;
    return value;
  }
  transfer(value, account){
    if(value>this.#balance){
      console.log("Your account can't do this transfer because you don't have enough balance.");
    }else{
      this.withdraw(value);
      account.deposit(value);
    }
  }
}