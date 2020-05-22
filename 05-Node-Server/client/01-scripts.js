function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(function(response) {
        console.log("Fetch response:", response)
        return response.text();
    })
    .then(function(text) {
        console.log(text);
    });
}

// POST long hand: /one
function postToOne(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }) .then(
        function(response){
            return response.text()
        }
    )   .catch(
        function(error){
            console.error('Error:', error)
        })
        .then (
            function(response){
                console.log('Success:', response)
            }
        )
}

// POST /one : Arrow function
function postToOneArrow(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, { // reaching out to an endpoint with a post request
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }) .then(res => res.text()) // asking for a plain text response
    .catch(error => console.error('Error:', error)) // handle error if one
    .then(response => console.log ('Success:', response)); // print the data to the console
}
 
// This function will allow us to add content to the database instead of retrieving a reponse when we post
function postData(){
    let content = { testdata: { item: 'This was saved!' } }; // set up an object, preset string as the value of the item property

    let testDataAfterFetch = document.getElementById('test-data'); // target specific ids in the DOM. they will hold the value of the response that comes back after the post is stored.
    let createdAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'POST', // now POST, instead of GET
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content) // pass in pre-defined object into the fetch call within the body
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text); // reponse back and printed to the console
        
        testDataAfterFetch.innerHTML = text.testdata.testdata;
        createdAfterFetch.innerHTML = text.testdata.createdAt;
    });
}

// GET FROM /ONE - Display Data
function fetchFromOneDisplayData(){
    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');

    fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.json()
        })
        .catch(
            function(error){
                console.error('Error:', error)
            })
            .then(
                function(results){
                    let myList = document.querySelector('#getjson');

                    for (r of results){
                        console.log('Response:' , r.testdata);
                        var listItem = document.createElement('li');
                        listItem.innerHTML = r.testdata;
                        myList.appendChild(listItem);
                    }
                })
}