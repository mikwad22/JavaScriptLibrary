var starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) {
    console.log(response)
    return response.json();
})
.then(function(json) {
    let people = json.results;

    for(p of people) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }

});

var starWarsStarshipList = document.querySelector('ul');

fetch('https://swapi.dev/api/starships')
.then(function(response) {
    console.log(response)
    return response.json();
})
.then(function(json) {
    let starships = json.results;

    for (s of starships) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + s.name + '</p>';
        starWarsStarshipList.appendChild(listItem);
    }
});