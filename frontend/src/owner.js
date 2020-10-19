import { Property } from './property.js'

class Owner {
    constructor(name, phone_number, real_estate_agent){
        this._name = name;
        this.phone_number = phone_number;
        this.real_estate_agent = real_estate_agent
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get phone_number(){
      return this.phone;
  }

  set phone_number(number){
      this.phone_number = number;
  }

  get real_estate_agent(){
      return this.real_estate_agent;
  }

  set real_estate_agent(agent){
      this.real_estate_agent = agent;
  }
  
  
  
  
}
