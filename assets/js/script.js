// 1. Nweed an event listener to catch the form submit
// 2. get the current value of the form inputs
// 3. redirect user to search-results.html with the query string

var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();
    console.log("click");
  
    var searchInputVal = document.querySelector('#search-input').value.trim();
    var formatInputVal = document.querySelector('#format-input').value.trim();

    if (!searchInputVal) {
        console.error("You need a search input value!");
        return;
    }

    var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

    location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);