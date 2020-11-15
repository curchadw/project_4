const BASE_URL = "http://localhost:3000"
const OWNERS_URL = `${BASE_URL}/owners/`
const PROPERTIES_URL = `${BASE_URL}/properties/`

//-------------------------------------------------------------

let listings = document.getElementById('listings')

const listForm = document.getElementById('listing_form')
const ownerForm = document.getElementById('owner_form')





document.addEventListener('DOMContentLoaded',() => {
 getListings();
 dropdownMenu()
  
});



ownerForm.addEventListener('submit',(event)=> {
event.preventDefault();
OwnerForm()
dropdownMenu()
ownerForm.reset()

})

function OwnerForm(){
  
  let name = document.getElementById('name').value
  let phone_number = document.getElementById('phone_number').value
  let real_estate_agent = document.getElementById('real_estate_agent').value



  let owner = {
    name: name, 
    phone_number: phone_number,
    real_estate_agent: real_estate_agent
  }
  
  const config ={
    method: 'POST',
    body: owner,
    headers: {
      
        "Accept": "application/json"
    }
  }
  fetch(OWNERS_URL, config)
  .then(resp => resp.json())
  .then(resp =>{
    console.log(resp)
  })
 }


 function dropdownMenu(){

  const dropdown = document.getElementById('owner_id');
  // dropdown.length = 0;
  // let defaultOption = document.createElement('option');
  // defaultOption.text = 'Choose owner';
  // defaultOption.value = '';
  // dropdown.add(defaultOption);
  // dropdown.selectedIndex = 0;
  dropdown.innerHTML= `` //disappear
  fetch(OWNERS_URL)
  .then(resp => resp.json())
  .then(owners => {
    owners.forEach(owner => {
    dropdown.innerHTML += `<option value = ${owner.id}>${owner.name}</option>`
    })
    
  })
}



const renderListing = (listing) => {
  const listingCard = document.createElement(`div`)
  listingCard.setAttribute('class','card')
  listingCard.dataset.id = listing.id

  listingCard.innerHTML = showListCard(listing)
  //---Delete Button
  const deleteBtn = document.createElement('button')
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
  // const ownerId = parseInt(event.target.dataset.ownerId)

  
  function ListForm(){
     let owner_id = document.getElementById('owner_id').value
     let address = document.getElementById('address').value
     let state = document.getElementById('state').value
     let sale_price = document.getElementById('sale_price').value

     const listing = {
      owner_id: parseInt(owner_id),
      address: address,
      state: state,
      sale_price: sale_price
    }

    // const formData = new FormData(listForm)

    const listObj = {
      method: 'POST',
      body:JSON.stringify(listing),
      headers: {
        
        
          "Accept": "application/json"
       }
      }
      
      fetch(PROPERTIES_URL, listObj)
      .then(res => res.json())
      .then((list_data) => {
        let new_listing = renderListing(list_data)
        listings.append(new_listing)
        
        console.log(new_listing)
      })
  } 
   
  listForm.addEventListener('submit',(event) =>{
     event.preventDefault();   
     ListForm()
     listForm.reset()
    

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
            <p>Sale Price: ${listing.sale_price}</p>
            `

            
}




const deleteListing = (listingId) =>{
  return fetch(`${PROPERTIES_URL}/${listingId}`, {
    method: "delete",
  })
  .then(res => res.json())
}