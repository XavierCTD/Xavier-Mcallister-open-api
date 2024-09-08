// Current Year 
const today = new Date();
let thisDay = today.getFullYear();
console.log(thisDay);

// Creating Multiple APIs


const fetchAll = async () => {
    Promise.all([
        await fetch('https://www.swapi.tech/api/people/1'),
        await fetch('https://www.swapi.tech/api/species/1')
    ]).then(links => {
        const response1 = links[0];
        const response2 = links[1];

        timeData = response1.json();
        functionData = response2.json();
    })
}
