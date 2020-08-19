import clubs from "./clubs.js";

class DataSource{
    // required only for basic class w/o promise
    // constructor(onSuccess, onFailed){
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    // }

    //The terms below is for using promise
    static searchClub(keyword){
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter(club => {
                console.log(keyword);
                return club.name.toUpperCase().includes(keyword.toUpperCase());
            });

            if(filteredClubs.length){
                resolve(filteredClubs);
            }
            else{
                reject(`${keyword} is not found"`);
            }
        });
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