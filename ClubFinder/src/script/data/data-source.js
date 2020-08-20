import clubs from "./clubs.js";

class DataSource{
    // required only for basic class w/o promise
    // constructor(onSuccess, onFailed){
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    // }

    //The terms below is for using promise
    // static searchClub(keyword){
    //     return new Promise((resolve, reject) => {
    //         const filteredClubs = clubs.filter(club => {
    //             console.log(keyword);
    //             return club.name.toUpperCase().includes(keyword.toUpperCase());
    //         });

    //         if(filteredClubs.length){
    //             resolve(filteredClubs);
    //         }
    //         else{
    //             reject(`${keyword} is not found"`);
    //         }
    //     });
    // }

    // If using API:
    // 1. Promise
    // static searchClubFromAPI(keyword) {
    //     return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(responseJson => {
    //         if(responseJson.teams) {
    //             return Promise.resolve(responseJson.teams);
    //         } else {
    //             return Promise.reject(`${keyword} is not found`);
    //         }
    //     })
    // }
    // 2. Async/await
    static async searchClubFromAPI(keyword) {
        const searchUrl = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=";
        try {
            const response = await fetch(`${searchUrl}${keyword}`);
            const responseJson = await response.json();
            if(responseJson.teams) {
                return Promise.resolve(responseJson.teams);                
                // fallbackResult(responseJson.message);
            } else {
                return Promise.reject(`${keyword} is not found.`);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
    

    // The terms below for using onSuccess and onFailed
    // searchClub(keyword){

    //     
    //     const filteredClubs = clubs.filter(club => {
    //         return club.name.toUpperCase().includes(keyword.toUpperCase());
    //     });
    
    //     if (filteredClubs.length) {
    //         console.log(filteredClubs);
    //         this.onSuccess(filteredClubs);
    //     } else {
    //         this.onFailed(`${keyword} is not found`);
    //     }
    // }
}


// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }

// DataSource.prototype.searchClub = function (keyword) {
//     const filteredClubs = clubs.filter(club => {
//         return club.name.toUpperCase().includes(keyword.toUpperCase());
//     });

//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         this.onFailed(`${keyword} is not found`);
//     }
// };

// Arrow Function can only be attached to Expression or Callback function

export default DataSource;