const BASE_URL = "http://localhost:3000"
const OWNERS_URL = `${BASE_URL}/owners`
const PROPERTIES_URL = `${BASE_URL}/properties`


document.addEventListener('DOMContentLoaded',(event) => {
  getListings();
  event.preventDefault();    
},false);




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

//-----------------------------------------------------------------
  const listingbtn = document.getElementById('prop_submit')
  const listContainer = document.getElementById('listings')
  

  // const createListing = (ownerId) => {
  //   return fetch(PROPERTIES_URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'owner_id': ownerId
  //     })
  //   })
  //   .then(res => res.json())
  // }

  const ajaxgo = () => {
      var data = new FormData();
      data.append
  }

  listingbtn.addEventListener('click',(event)=>{
    createListing(parseInt(event.target.dataset.ownerId))
    .then(res=>res.json())
    .then(json => {
     showListCard(json)
    })
  })
//Will grab the listings in db/json and will display the record/listing on page

const getListings = () => {
  return fetch(PROPERTIES_URL)
  .then(res => res.json())
}


//The actual rendering of the listing card
const showListCard = (listing) => {
    return `<p>${listing.address}</p>
            <p>${listing.state}</p>
            <p>${listing.sale_price}</p>
            <p>${listing.owner_id}</p>`
}

const deleteListing = (listingId) =>{
  return fetch(`${PROPERTIES_URL}/${listingId}`, {
    method: "DELETE",
  })
  .then(res => res.json())
}



getListings()
    .then(json => {
      // debugger
      json.forEach(listing =>{
        let listingCard = document.createElement('div')
        
        listingCard.setAttribute('class','card')
        listingCard.dataset.id = listing.id
        listingCard.innerHTML = showListCard(listing)
        let deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('id','delete')
        deleteBtn.innerHTML = 'Delete Listing'
        deleteBtn.addEventListener('click', (event)=>{
          let listingId = parseInt(event.target.dataset.listingId)
          event.target.parentNode.remove()
          deleteListing(listingId)
        })
        listingCard.appendChild(deleteBtn)
        listContainer.appendChild(listingCard)
        
      })
    })


    

  

    





 