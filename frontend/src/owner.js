import { Property } from './property.js'

class Owner {
    constructor(owner){
        this.id = owner.id
        this.name = owner.name;
        this.phone_number = owner.phone_number;
        this.real_estate_agent = owner.real_estate_agent
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

  renderOwner(){
      return (`
        <p>${this.name}</p>
        <p>${this.phone_number}</p>
        <p>${this.real_estate_agent}</p>
        `)
  }
  
  
  
  
}
