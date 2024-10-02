// Current Year 
const today = new Date();
let thisDay = today.getFullYear();
console.log(thisDay);


// Creating API

fetch('https://www.swapi.tech/api/people/1'), {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Luke Skywalker'
  })
}
.then(response => {
 return response.json() 
})
.then(data => {console.log(data))}
.catch(error => console.log('ERROR'));
