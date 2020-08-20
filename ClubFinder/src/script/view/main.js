import '../component/search-bar.js';
import '../component/club-list.js';
import DataSource from '../data/data-source.js'

const main = _ =>{
    // The old style
    // const searchElement = document.querySelector("#searchElement");
    // const buttonSearchElement = document.querySelector("#searchButtonElement");
    
    // with Component Style
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    // const onButtonSearchClicked = () => {
    //     // If using the basic prototype function/class in data-source.js
    //     // const dataSource = new DataSource(renderResult, fallbackResult);
    //     // dataSource.searchClub(searchElement.value);

    //     //If using promises in searchClub() in data-source.js
    //     DataSource.searchClub(searchElement.value).then(renderResult).catch(fallbackResult);


    // };

    // If using async and await style
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClubFromAPI(searchElement.inputValue);
            renderResult(result);
        } catch (error) {
            console.log(error);
            fallbackResult(error);
        }
    };

    const renderResult = results => {
        clubListElement.clubItems = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };
    // The above "Arrow Function" Implementation is the same as this one:
    /*
    const fallbackResult = function(message) {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
    };
    */

    // using old style
    // buttonSearchElement.addEventListener("click", onButtonSearchClicked);

    // with component style
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;