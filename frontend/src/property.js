class Property {
    constructor(address,state,sale_price){
        this.address = address;
        this.state = state;
        this.sale_price = sale_price;
    }

    set address(newAddress){
        this.address = newAddress
    }

    get address(){
        return this.address
    }


    set state(state){
        this.state = state
    }

    get state(){
        return this.state
    }

    set sale_price(price){
        this.sale_price = price
    }

    get sale_price(){
        return this.sale_price
    }

}