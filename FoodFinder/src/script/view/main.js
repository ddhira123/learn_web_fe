import '../component/search-bar.js';
import '../component/food-list.js';
import DataSource from '../data/data-source.js'

const main = _ =>{
    const searchElement = document.querySelector("search-bar");
    const foodListElement = document.querySelector("food-list");
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchFoodFromAPI(searchElement.inputValue);
            console.log(result);
            renderResult(result);
        } catch (error) {
            console.log(error);
            fallbackResult(error);
        }
    };

    const renderResult = results => {
        try {
            console.log(results);
            foodListElement.foodItems = results;
        } catch (error) {
            console.log(error);
        }
    };

    const fallbackResult = message => {
        foodListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;