// Current Year 
const today = new Date();
let thisDay = today.getFullYear();
console.log(thisDay);

// Creating Multiple APIs


// First API

fetch('https://www.swapi.tech/api/people/1')
.then(response => {
  if (!response.ok) {
    throw new Error('Request failed');
  } return response.json(); 
})
.then(first => {
  console.log(first);
})
catch(error => {
  console.error('An error occurred:', error);
});


// Second API

fetch('https://www.swapi.tech/api/species/1')
 .then(res => {
  if (!res.ok) {
    throw new Error('Request failed);
  } return res.json();
  .then(second => {
    console.log(second);
  })
  catch(error => {
    console.error('An error occurred:', error);
  });
