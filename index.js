// Current Year 
const today = new Date();
let thisDay = today.getFullYear();
console.log(thisDay);

async function fetchApi() {
  try {
    const response = await fetch('https://www.swapi.tech/api/people/1);
        if(!response.ok) {
          throw new error('Request Failed');
        }
    const data = await response.json();
  console.log(data);
  } catch (error) {
    console.error('An Error Occurred:', error);
  }
}

fetchApi();
