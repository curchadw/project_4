

const BASE_URL = "http://localhost:3000"
const OWNERS_URL = `${BASE_URL}/owners/`
const PROPERTIES_URL = `${BASE_URL}/properties/`

//-------------------------------------------------------------

var listings = document.getElementById('listings')

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
  
  var name = document.getElementById('name').value
  var phone_number = document.getElementById('phone_number').value
  var real_estate_agent = document.getElementById('real_estate_agent').value



  var owner = {
    name: name, 
    phone_number: phone_number,
    real_estate_agent: real_estate_agent
  }

  var config ={
    method: 'POST',
    body: JSON.stringify(owner),
    headers: {
      'Content-Type': 'application/json',
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

  var dropdown = document.getElementById('owner_id');
  dropdown.length = 0;
  var defaultOption = document.createElement('option');
  defaultOption.text = 'Choose owner';
  defaultOption.value = '';
  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;
  dropdown.innerHTML= `` //disappear
  fetch(OWNERS_URL)
  .then(resp => resp.json())
  .then(owners => {
    owners.forEach(owner => {
    dropdown.innerHTML += `<option>${owner.name}</option>`
    })
    
  })
}



const renderListing = (listing) => {
  var listingCard = document.createElement('div')
  listingCard.setAttribute('class','card')
  listingCard.dataset.id = listing.id
  listingCard.innerHTML = showListCard(listing)
  //---Delete Button
  var deleteBtn = document.createElement('button')
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
     
     var owner = document.getElementById('owner_id').value
     var address = document.getElementById('address').value
     var state = document.getElementById('state').value
     var sale_price = document.getElementById('sale_price').value
    
    const listing = {
       owner_id: owner,
       address: address,
       state: state,
       sale_price: sale_price
     }

     

     const listObj = {
      method: 'POST',
      body: listing,
      headers: {
        'Content-Type': 'application/json',
          "Accept": "application/json"
      }
      }
      
      fetch(PROPERTIES_URL, listObj)
      .then(res => res.json())
      .then((list_data) => {
        var new_listing = renderListing(list_data)
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
            <p>Sale Price: ${listing.sale_price}</p>
            
            `

            
}




const deleteListing = (listingId) =>{
  return fetch(`${PROPERTIES_URL}/${listingId}`, {
    method: "delete",
  })
  .then(res => res.json())
}




    





   
   

  

    



