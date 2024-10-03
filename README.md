[Xavier's Open API Project] (https://github.com/XavierCTD/Xavier-Mcallister-open-api)

Overview
This basic page was created as part of the pre-work requirement in order to be considered for the advance classes at Code The Dream found here.

Requirements
Creating the HTML for the page
Styling the elements on the page using CSS
Retrieving the data to display on the page using JavaScript to fetch the data from the Star Wars API as needed
Providing a README file that includes the instructions for running the webpage
Display the data for at least 2 of the models in the API (we suggest starting with people and films)
Provide a way for the user to navigate from each model’s page to the other models that are displayed
The simplest version of this would allow going from a person to the films they are in and from a film to the characters in that film
Issue new GET requests for the linked data to display in the linked pages
The project should be created as a repository in GitHub and a link to the repository should be submitted for assessment in the assessment form.
Areas that will be included in the assessment include:

Can we get the code to run without issues by following the instructions in the README file
Is the site usable to navigate between the different models it loads
Is the code readable and well structured
Does it handle error cases
What type of styling was included
While we do expect to see some custom styling on the site - this is primarily an assessment of coding skills and not design strength so a simple set of styling is acceptable.
Extra

The following are not necessary, but are examples of things that would be nice bonuses:

A particularly well-designed GUI
Display and navigation of more than 2 categories of data from the api
Displaying all of the data associated with each model
The Project
Netlify Status

starwarscall

The project uses HTML, CSS and Javascript.

The styling is done in CSS.

The data for this project was fetched from a free Star Wars API found at swapi.dev as required. Example request:

http https://swapi.dev/api/people/1/

Example response:

Content-Type: application/json
{
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "films": [
        "https://swapi.dev/api/films/1/",
        ...
    ],
    "gender": "Male",
    "hair_color": "Blond",
    "height": "172",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker",
    "skin_color": "Fair",
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-10T13:52:43.172000Z",
    "species": [
        "https://swapi.dev/api/species/1/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        ...
    ],
    "url": "https://swapi.dev/api/people/1/",
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/"
        ...
    ]
}
How to download and run this project:
You can either clone the repository from the github or downlad the zip.
clone link and download option can be found from right side of the repository page
Unzip the file and open the project on your terminal by navigating to the folder
Data for people and films are displayed

Two links provide access to both models

Models allow to view characters in the film and films for characters

Two get requests are built for both data models

Repository has been created here

See deployed version here