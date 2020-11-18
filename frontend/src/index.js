const BASE_URL = "http://localhost:3000"
const OWNERS_URL = `${BASE_URL}/owners`
const PROPERTIES_URL = `${BASE_URL}/properties`

//-------------------------------------------------------------

const listings = document.getElementById('listings')

const listForm = document.getElementById('listing_form')
const ownerForm = document.getElementById('owner_form')





document.addEventListener('DOMContentLoaded',(event) => {
 event.preventDefault()
 getListings();
 dropdownMenu()
  
});



ownerForm.addEventListener('submit',(event)=> {

OwnerForm()
dropdownMenu()
ownerForm.reset()
event.preventDefault();
})

function OwnerForm(){
  
  let name = document.getElementById('name').value
  let phone_number = document.getElementById('phone_number').value
  let real_estate_agent = document.getElementById('real_estate_agent').value
 
 //Owner Class-------------------------------------------------------------------------------------------------
  let Owner = class Owner {
    constructor(name,phone_number,real_estate_agent){
      this.name = name;
      this.phone_number = phone_number;
      this.real_estate_agent = real_estate_agent;
    }
  }

  const owner = new Owner(name, phone_number,real_estate_agent)
  



  const config ={
    method: 'post',
    body:JSON.stringify(owner),
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
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
  listingCard.setAttribute('id','edit')
  listingCard.dataset.id = listing.id

  listingCard.innerHTML = showListCard(listing)
  //---Delete Button
  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('id','delete')
  deleteBtn.innerHTML = 'Delete Listing'
  deleteBtn.addEventListener('click', (event)=>{
    // let listingId = parseInt(event.target.dataset.listingId)
    event.target.parentNode.remove()
    deleteListing(listing)
  })
  listingCard.appendChild(deleteBtn)
  
  return listings.appendChild(listingCard)
  //--Edit Button----
 
  
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

    //Property Class-----------------------------------------------------
     let Property = class Property {
      constructor(address,owner_id,sale_price,state){
        this.address = address;
        this.owner_id = owner_id;
        this.sale_price = sale_price;
        this.state = state;
      }
    }
  
    const listing = new Property(address, owner_id,sale_price,state)

    
    
    const listObj = {
      method: 'post',
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
        },
        body: JSON.stringify(listing),
      }
      
      fetch(PROPERTIES_URL, listObj)
      .then(res => res.json())
      .then((list_data) => {
        var new_listing = renderListing(list_data)
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
            <p>Address: ${listing.owner.name}</p>
            <p>State: ${listing.owner.phone_number}</p>
            <p>Sale Price: ${listing.owner.real_estate_agent}</p>
`
// const newlisting = new Property(listing)
// newlisting.renderListing()
}








const deleteListing = (listingId) =>{
  return fetch(`${PROPERTIES_URL}/${listingId}`, {
    method: "delete",
  })
  .then(res => res.json())
}


