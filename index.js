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
  .then(res => {
   return res.json() 
  })
  .then(data => {
    data.forEach( user => {
      const markup = `<li></li>`
    });
    console.log(data)})
  .catch(Error => console.log(Error));
