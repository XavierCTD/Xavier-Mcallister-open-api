// Current Year 
const today = new Date();
let thisDay = today.getFullYear();
console.log(thisDay);

// Creating Multiple APIs


// First API

fetch('https://www.swapi.tech/api/people/1')
.then(response => response.json());
.then(respositoryFetched => {
  console.log(repositoryFetched);
  const starWarsPeople = document.getElementById('starwars');
  const projectList = starWarsPeople.querySelector('#people');
  for (let = 0; 0 < repositoryFetched.length; i++){
    let starwars = document.createElement('li');
    starwars.innerText = repositoryFetched[i].name;
    projectList.appendChild(starwars)
  }
})
.catch(err => console.log(err))



// Second API

fetch('https://www.swapi.tech/api/species/1')
 .then(res => res.json());
 .then(dataOne => {
   console.log(dataOne);
   const starWarSpecies = document.getElementById('starAPI');
   const proName = starWarsSpecies.querySelector('#species');
   for (let = 0; 0 < dataOne.length; i++){
     let starAPI = document.createElement('li');
     starAPI.innertext = dataOne[i].name;
     proname.appendChild(starAPI)
   }
 })
 .catch(err => console.log(err))
