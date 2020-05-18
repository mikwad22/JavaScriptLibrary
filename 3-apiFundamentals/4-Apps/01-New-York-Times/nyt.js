const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; // creating a const variable the actual web address for the API
const key = '8IpmSjPAxaqACiI0xDztIJ7hvluseouV'; // creating a const for the Key allowing you access into the API
let url; //3 declaring a url

//SEARCH FORM   // query selector-returns the first element within the document that matches the specified selector or group of selectors. If no matches are found, null is returned.
const searchTerm = document.querySelector('.search'); // inside the selector we are giving a class search
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date'); 
const searchForm = document.querySelector('form'); // returns document with the first tag form
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none'; // hides 'prev' and 'next' buttons before doing search
let pageNumber = 0; // pagination, setting page number to 0 by default
console.log('PageNumber', pageNumber);
let displayNav = false; // to further ensure that the nav won't be visible until we want it to be

//addEventListener to help us identify a target and then add an event listener on that target.                         
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3
                    //1 : event handling function, represents and event which takes place in the DOM
function fetchResults(e){
  //  console.log(e); //2 : logging the event objects
    e.preventDefault(); // e is any event variable, prevent default action of the form of refreshing page
    // Assemble the full URL     
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);
    //3 : baseURL is the endpoint + versitile string
    
    
    // If the input fields for dates aren't blank, denoted by the !== '', the date values will be added to the URL string. If they're blank, the expressions inside of the conditionals are ignored.
    if (startDate.value !== '') {  // checking to see if startDate is equal to an empty string
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value; 
    };

    if (endDate.value !== '') { // checking to see if the value is equal to an empty string
        url += '&end_date=' + endDate.value;
    };
    
    console.log(url); //4 : logging the string

    fetch(url) // make a fetch request and pass in the NYT url
        .then(function(result) { // create a promise resolver and creating a function promise returns a reponse object called result
            console.log(result)
            return result.json(); // the promise asynchronously returns a function that converts the result into usable json
        }) .then(function(json) { // creating a 2nd promise resolver that has a function that takes in the json object
            console.log(json);
            displayResults(json); //we fire off a function called displayResults that will work to manage that data.
        })
}

function displayResults(json) { // displayResults function with the json as a parameter
    console.log("DisplayResults", json);
};

// We run the displayResults function each time the button gets pressed. in this chunk of code, we are checking to see if the section element has any child elemnets.
function displayResults(json) {
    while (section.firstChild) { // if true, then we call removeChild: section tag
        section.removeChild(section.firstChild); // if true, this will clear out any child elements that are in the section.
} // the while loop will clear out any articles before new search results are added.

    let articles = json.response.docs; // store specific data in a variable(articles) json is now an object

    if(articles.length === 10) {
        nav.style.display = 'block'; // shows the nav display if the 10 items in the array
    } else {
        nav.style.display = 'none'; // hides the nav display if less than 10 items are in the array
    }
  
    if(articles.length === 0) { // if articles length is zero then it will console log "no results"
      console.log("No results");
    } else {  // for loop that will iterate for the length of the articles array.
      for(let i = 0; i < articles.length; i++) {
        // createElement method creates a variable for HTML that can be appended later.
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let para = document.createElement('p');
        let clearfix = document.createElement('div');
  
        let current = articles[i]; // create a current variable that holds the data of the current article [i] as we iterate.
        console.log("Current:", current); //3
  
        link.href = current.web_url; // .web_url grabs the hyplerlink for the current article out of the json result
        link.textContent = current.headline.main; // and array of objects and we are digging out headline property and main property

        para.textContent = 'Keywords: '; // grabbing para variable and setting text content of "keywords"

        // We are using this nested loop to iterate over the current object, specifically the keywords array for that object. If you look through the JSON results, you'll see that keywords is a property of the entire object, and it's an array. Here, we iterate through the length of the array for the current result object.
        for(let j = 0; j < current.keywords.length; j++) { 
            let span = document.createElement('span'); // As we iterate, we create a <span> for each keyword. 
           // The textContent for each <span> will be the value found inside the keywords array inside the JSON object.
            span.textContent += current.keywords[j].value + ' '; // running a loop over our array of keywords
            // we append each <span> to the para node.
            para.appendChild(span); // para variable and doing appendChild method and putting an element inside 
        }
        if (current.multimedia.length > 0) { 
            img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
            img.alt = current.headline.main;
        }

        clearfix.setAttribute('class', 'clearfix'); //If an element is taller than the element containing it, and it is floated, it will overflow outside of its container. clears extra space to make div even.
  
        article.appendChild(heading); // adding heading tag to the article tag
        heading.appendChild(link);
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article); // grabbing article variable and appending that to the section tag (global variable)
      }
    }
  };
                // storing e to prevent from default
function nextPage(e) { // creating function and storing event for nextPage
    pageNumber++; // 
    fetchResults(e); // exectuting page results with the page number
    console.log("Page number:", pageNumber);
}; //5 : basic function to define nextPage and log it

function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
}; //5 : basic function to define previousPage and log it


