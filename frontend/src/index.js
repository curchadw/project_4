const BASE_URL = "http://localhost:3000"
const OWNERS_URL = `${BASE_URL}/owners/`
const PROPERTIES_URL = `${BASE_URL}/properties/`

//-------------------------------------------------------------

let listings = document.getElementById('listings')

const listForm = document.getElementById('listing_form')
const ownerForm = document.getElementById('owner_form')
const ownerBtn = document.getElementById('owner_submit')




document.addEventListener('DOMContentLoaded',() => {
  getListings();
  
  
});

let dropdown = document.getElementById('owner_id');
dropdown.length = 0;
let defaultOption = document.createElement('option');
defaultOption.text = 'Choose owner';
defaultOption.value = '';
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;


//this fetched (GET) owners for my dropdown
fetch(OWNERS_URL)
    .then((resp) =>{
        if(resp.status !== 200){
            console.warn('Looks like there was a problem. Status Code: ' + 
          resp.status);  
        return;    
        }
        resp.json().then((data) =>{  
            
        
            for (let i = 0; i < data.length; i++) {
                let option;
                option = document.createElement('option');
              
                option.text = data[i].name;
                // debugger
                option.value = data[i].id; 
                dropdown.add(option); 
                console.log(option)
            }    
          }); 

    }
    )
    .catch(function(err) {  
        console.error('Fetch Error -', err);  
      });

      //-----Owner form submit data
      ownerForm.addEventListener('submit', (event)=>{
        event.preventDefault();  
        const formData = new FormData(ownerForm)
        
        const ownerObj = {
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
              "Accept": "application/json"
          },
          body: formData
        }


        
        fetch(OWNERS_URL, ownerObj).then(resp => resp.json()).then((owner_obj) => {
        let option = document.createElement('option');
        option.textContent = owner_obj.name;
        dropdown.add(option)
        console.log(owner_obj)
        ownerForm.reset()
        })
      })

      //---------------------------------------------------------------------------------------------------




const renderListing = (listing) => {
  let listingCard = document.createElement('div')
  listingCard.setAttribute('class','card')
  listingCard.dataset.id = listing.id
  listingCard.innerHTML = showListCard(listing)
  //---Delete Button
  let deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('id','delete')
  deleteBtn.innerHTML = 'Delete Listing'
  deleteBtn.addEventListener('click', (event)=>{
    let listingId = parseInt(event.target.dataset.listingId)
    event.target.parentNode.remove()
    deleteListing(listingId)
  })
  listingCard.appendChild(deleteBtn)
  
  return listings.appendChild(listingCard)
  
  
  
}



//---------------------------------------------------------------------------------------------------
  const listingbtn = document.getElementById('prop_submit')
  const listContainer = document.getElementById('listings')

  
   
   
  listForm.addEventListener('submit',(event) =>{
     event.preventDefault();   
     
     const property = {
       address: document.getElementById('address').value,
       state: document.getElementById('state').value,
       sale_price: document.getElementById('sale_price').value,
       owner_id: document.getElementById('owner_id').value,
     }

     const listObj = {
      method: 'POST',
      body: JSON.stringify(property),
      header: {
        'Content-Type': 'application/json',
          "Accept": "application/json"
      }
      }
      
      fetch(PROPERTIES_URL, listObj)
      .then(res => res.json())
      .then((list_data) => {
        let new_listing = renderListing(list_data)
        listings.append(new_listing)
        listForm.reset()
        console.log(list_data)
      })
  })



  
//Will grab the listings in db/json and will display the record/listing on page

const getListings = () => {
  return fetch(PROPERTIES_URL)
  .then(res => res.json())
}



getListings().then(listings => {
  listings.forEach(listing=>{
    renderListing(listing)
  })
})


// The actual rendering of the listing card
const showListCard = (listing) => {
  
    return `<p>Address: ${listing.address}</p>
            <p>State: ${listing.state}</p>
            <p>Sale Price: ${listing.sale_price}</p>`

            
}




const deleteListing = (listingId) =>{
  return fetch(`${PROPERTIES_URL}/${listingId}`, {
    method: "DELETE",
  })
  .then(res => res.json())
}




    





   
   

  

    





 