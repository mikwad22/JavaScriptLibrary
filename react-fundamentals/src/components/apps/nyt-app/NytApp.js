// parent component - main component
import React, {useState} from 'react'; // import package react from react using useState
import NytResults from './NytResults'; // import NytResutls from nytResults
import './index.css' //import index.css

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //add base URL from nyt API and our key
const key = '8IpmSjPAxaqACiI0xDztIJ7hvluseouV'; // key that we got when we created our nyt 

const NytApp = () => { // declare NYT app function - main component(parent)

// setting up state and storing the data or info from the user to send to the API
    const [search, setSearch] = useState(''); // set up state variable for search using a string
    const [startDate, setStartDate] = useState(''); 
    const [endDate, setEndDate] = useState('');
    const [pageNumber, setPageNumber] = useState(0); // set up pageNumber variable useState is equal to page 0
    const [results, setResults] = useState([]); // results is equal to emtpy array

    //fetch results when the user submits the form, presses next or previous page, etc.
    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`; // creating url variable based on the baseURL, the key, pageNumber and search
        url = startDate ? url + `&begin_date=${startDate}` : url; // utilizing ternary operators to append the startDate and endDate if they exist to the url
        url = endDate ? url + `&end_date=${endDate}` : url; // same as above, going to used in our GET request

        fetch (url) // fetch GET request to url
        .then(res => res.json()) // when the promise is resolved, we return response json
        .then(data => setResults(data.response.docs)) // stores the data in results state value to hold the information we get back
        .catch(err => console.log(err)); // catch keyword if no results - we console log error
    };

    //creating method for when the user submits a form - prevents the page refreshing which is default
    const handleSubmit = (event) => {
        event.preventDefault();
        setPageNumber(0); // setting page number to 0 after each submit
        fetchResults(); // calling fetch function to submit results
    }

    //creating method for 
    const changePageNumber = (event, direction) => { //taking in the event to prevent default and direction
        event.preventDefault();
        if (direction === 'down') { // if the direction is strict equal to down
            if (pageNumber > 0) { // check if page number is equal to zero to prevent negative numbers
                setPageNumber(pageNumber - 1); // set page number to count down by one
                fetchResults();
            }
        }
        if (direction === 'up') { // if the direction is strict equal to up
        setPageNumber(pageNumber + 1); // set page number to count up by one
        fetchResults();
    }
};
    // form to capture input from our user.
    return(
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}> 
                    <span>Enter a single search term (required) : </span>
                    <input type="text" name ="search" onChange= {(e) => setSearch(e.target.value)} required />
                    <br/>
                    <span>Enter a start date: </span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)}/>
                    <br/>
                    <span>Enter an end date: </span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)}/>
                    <br/>
                    <button className="submit">Submit search</button>
                </form>
                {results.length > 0 ? <NytResults results={results} changePage={changePageNumber}/> : null}
            </div>
        </div>
    );
};

export default NytApp;