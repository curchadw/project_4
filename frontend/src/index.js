// import { Owner } from './owner.js';
// import { Property } from './property.js'



const BASE_URL = "http://localhost:3000"
const OWNERS_URL = `${BASE_URL}/owners`
const PROPERTIES_URL = `${BASE_URL}/properties`


document.addEventListener('DOMContentLoaded',() => {
    
    alert('Test')
    console.log('Test')
    
   });


   const ownerBtn = document.getElementById('owner_submit')
   ownerBtn.addEventListener('submit',(e)=>{
       e.preventDefault()
   })
   const propBtn = document.getElementById('prop_submit')



   

   function addListing() {

    return fetch(PROPERTIES_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ 'owner_id': ownerId })
    })
        .then((resp) => resp.json())
        .then((json) => { console.log(json); })
        .catch((error) => console.log(error));

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



let dropdown = document.getElementById('owner_id');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose owner';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = OWNERS_URL;

fetch(url)
    .then((resp) =>{
        if(resp.status !== 200){
            console.warn('Looks like there was a problem. Status Code: ' + 
          resp.status);  
        return;    
        }
        resp.json().then((data) =>{  
            let option;
        
            for (let i = 0; i < data.length; i++) {
              option = document.createElement('option');
                option.text = data[i].name;
                option.value = data[i].id; 
                dropdown.add(option);
            }    
          }); 

    }
    )
    .catch(function(err) {  
        console.error('Fetch Error -', err);  
      });


      const addProperty = 



// async function getOwnerData(){
//     const ownerPromise = await fetch(OWNERS_URL)
//     const owner = await ownerPromise.json()
//     owner.forEach( owner => {
//         const name = this.name
//         const phone_number = this.phone_number
//         const real_estate_agent = this.real_estate_agent
//         main.innerHTML += `<div>
//                     <h2>Owner Name: ${name}</h2>
//                     <p>Phone Number: ${phone_number}</p>
//                     <p>Real Estate Agent: ${real_estate_agent}</p>
//                     <p>Current Properties: ${owner.properties.state}</p>
//         </div>
//         `
//     })

    


    
// }







 