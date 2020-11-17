class Owner {
    constructor(name,phone_number,real_estate_agent){
        this.name = name;
        this.phone_number = phone_number;
        this.real_estate_agent = real_estate_agent
    }

    get name(){
        return this.name;
    }

    set name(name){
        this.name = name;
    }

    get phone_number(){
      return this.phone;
  }

  set phone_number(phone_number){
      this.phone_number = phone_number;
  }

  get real_estate_agent(){
      return this.real_estate_agent;
  }

  set real_estate_agent(real_estate_agent){
      this.real_estate_agent = real_estate_agent;
  }

  renderOwner(){
      return (`
        <p>${this.name}</p>
        <p>${this.phone_number}</p>
        <p>${this.real_estate_agent}</p>
        `)
  }
  
}
