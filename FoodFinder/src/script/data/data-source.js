class DataSource{
    static async searchFoodFromAPI(keyword) {
        const searchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        try {
            const response = await fetch(`${searchUrl}${keyword}`);
            const responseJson = await response.json();
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`${keyword} is not found.`);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
};

export default DataSource;