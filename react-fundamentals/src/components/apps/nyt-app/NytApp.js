// parent component - main component
import React, {useState} from 'react';
import NytResults from './NytResults';
import './index.css'

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '8IpmSjPAxaqACiI0xDztIJ7hvluseouV';

const NytApp = () => {

    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [results, setResults] = useState([]);

    //fetch results when the user submits the form, presses next or previous page, etc.
    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`; // creating url variable based on the baseURL, the key, pageNumber and search
        url = startDate ? url + `&begin_date=${startDate}` : url; // utilizing ternary operators to append the startDate and endDate if they exist to the url
        url = endDate ? url + `&end_date=${endDate}` : url;

        fetch (url) // fetch GET request to url
        .then(res => res.json())
        .then(data => setResults(data.response.docs))
        .catch(err => console.log(err));
    };

    //when the user submits a form - prevents default to page refreshing
    const handleSubmit = (event) => {
        event.preventDefault();
        setPageNumber(0);
        fetchResults();
    }

    const changePageNumber = (event, direction) => { //taking in the event to prevent default and direction
        event.preventDefault();
        if (direction === 'down') {
            if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
                fetchResults();
            }
        }
        if (direction === 'up') {
        setPageNumber(pageNumber + 1);
        fetchResults();
    }
};
    // form
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
                {
                    results.length > 0 ? <NytResults results={results} changePage={changePageNumber}/> : null
                }
            </div>
        </div>
    );
};

export default NytApp;