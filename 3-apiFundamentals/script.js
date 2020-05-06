const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector("form"); // query selector goes through the document and picks out what we need and returns it to JS
const spaceShips = document.querySelector("table");

searchForm.addEventListener("submit", fetchSpace); //fetches a resource and returns a promise

function fetchSpace(e) { //fetch returns a promise
    e.preventDefault(); //prevent it from refreshing

    fetch(baseURL) // this returns a promise
        .then(data => data.json()) //the callback to execute when the promise is resolved
        .then(json => displayRockets(json)) //call the function to display the data
        .catch(err => console.log(err)); //the callback to execute if the promise is rejected or fail

        //code here
    }

    function displayRockets(rockets) {
        console.log("Results:", rockets);
        let eachRocket = rockets.forEach(r => {
            console.log(r);

            let rocket = document.createElement("tr");  //sitting in limbo unitl we append it(see below)
            let rocketName = document.createElement("td");
            let rocketCost = document.createElement("td");

            rocketName.innerText = r.name;
            rocketCost.innerText = r.cost_per_launch; // snake case is valid in JS

            spaceShips.appendChild(rocket); //running a method; taking the parent element and giving a child element
            rocket.appendChild(rocketName); //rocket is the parent and we are giving it child rocktName
            rocket.appendChild(rocketCost);
        })
    }