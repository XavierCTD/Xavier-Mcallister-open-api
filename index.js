// Current Year 
const today = new Date();
let thisDay = today.getFullYear();
console.log(thisDay);


// Creating API

fetch('https://www.swapi.tech/api/people/')
.then(response => {
  if (!response.ok) {
    throw new Error('Request failed');
  }
 return response.json(); 
})
.then(data => {
const header = document.getElementById('Head');
header.textContent = `${data.results[0].name}`
})

.catch(error => {
  console.error('An error occurred:', error);
});

// Displaying Info 

const header = document.getElementById('Head');
header.textContent = `${data.results[0].name}` 