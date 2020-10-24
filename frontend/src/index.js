const BASE_URL = "http://localhost:3000"
const OWNERS_URL = `${BASE_URL}/owners`
const PROPERTIES_URL = `${BASE_URL}/properties`


document.addEventListener('DOMContentLoaded',() => {
    
    console.log('Test')
    
   });


let dropdown = document.getElementById('owner_id');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose owner';
defaultOption.value = '';
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;



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


  const listingbtn = document.getElementById('prop_submit')


  const displayListings = () => {
    

}

  listingbtn.addEventListener('submit',()=>{})

      const addlisting = (ownerId) =>{
          return fetch(PROPERTIES_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              'owner_id': ownerId
            })
          }).then(res => res.json())
      }


  

    





 