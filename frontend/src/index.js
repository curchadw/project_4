import { Owner } from './owner.js';
import { Property } from './property.js'

const BASE_URL = "http://localhost:3000"
const OWNERS_URL = `${BASE_URL}/owners`
const PROPERTIES_URL = `${BASE_URL}/properties`
const BACKEND_URL = 'localhost:3000';
const submitBtn = document.querySelector('#submit')

document.addEventListener('DOMContentLoaded',() => {
    
    
    
   });


//    submitBtn.addEventListener('submit',{
//        if(event.target.id === 'submit'){
           
//        }
//    })

   const addListing = () => {

        return fetch(PROPERTIES_URL,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body:JSON.stringify({'owner_id': ownerId})
        })
        .then((resp) => resp.json())
        .then((json) =>{console.log(json)})
        .catch((error) =>console.log(error))

   }


   const addOwner = () => {

    return fetch(OWNERS_URL,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body:JSON.stringify({'owner_id': ownerId})
    })
    .then((resp) => resp.json())
    .then((json) =>{console.log(json)})
    .catch((error) =>console.log(error))

}











async function getOwnerData(){
    const ownerPromise = await fetch(OWNERS_URL)
    const owner = await ownerPromise.json()
    owner.forEach( owner => {
        const name = this.name
        const phone_number = this.phone_number
        const real_estate_agent = this.real_estate_agent
        main.innerHTML += `<div>
                    <h2>Owner Name: ${name}</h2>
                    <p>Phone Number: ${phone_number}</p>
                    <p>Real Estate Agent: ${real_estate_agent}</p>
                    <p>Current Properties: ${owner.properties.state}</p>
        </div>
        `
    })

    

    function makeListingForm(){
        return (`
            <form>
                <label>Owner Name:</label>
                <input type="text" id="owner_name"><br>
                <label>Phone Number:</label>
                <input type="text" id="phone_number"><br>
                <label>Real Estate Agent:</label>
                <input type="text" id="agent"><br>
                <input type ="submit">
                
            </form>
            `)
    }
    
}



 



 