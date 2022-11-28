//Class Client
export class Client { //Class delaration
  //Class attributes
  name;     
  #id;
  
  get id(){
    return this.#id;
  }

  constructor(name, id){ //Constructor of class Client.
    this.name = name;
    this.#id = id;
  }
  
}
