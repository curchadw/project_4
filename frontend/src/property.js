class Property {
    constructor(property){
        this.id = property.id
        this.address = property.address;
        this.state = property.state;
        this.sale_price = property.sale_price;
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

    renderListing(){
        return(`<p>Address: ${this.address}</p>
                <p>State: ${this.state}</p>
                <p>Sale Price: ${this.sale_price}</p>`)
    }

}