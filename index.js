// Current Year 
const today = new Date();
let thisDay = today.getFullYear();
console.log(thisDay);

fetch('https://www.swapi.tech/api/people/1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "message": "ok",
    "result": {
      "properties": {
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "created": "2024-09-05T22:18:57.542Z",
        "edited": "2024-09-05T22:18:57.542Z",
        "name": "Luke Skywalker",
        "homeworld": "https://www.swapi.tech/api/planets/1",
        "url": "https://www.swapi.tech/api/people/1"
      },
    "description": "A person within the Star Wars universe",
    "_id": "5f63a36eee9fd7000499be42",
    "uid": "1",
    "__v": 0
  }
  }).then(res => {
    return res.json()
  })
})
.then(data => console.log(data))
  .catch(error => console.log('ERROR'))
