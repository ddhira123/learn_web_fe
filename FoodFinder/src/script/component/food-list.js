import '../component/food-list-item.js'

class FoodList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set foodItems(items){
        console.log(items);
        this._items = items;
        this.render();
    }

    render(){
        var row;
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <style>
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            margin-top: 32px;
            width: 100%;
            padding: 16px;
        }
        
        .placeholder{
            font-weight: lighter;
           color: rgba(0,0,0,0.5);
           -webkit-user-select: none;
           -moz-user-select: none;
           -ms-user-select: none;
           user-select: none;
        }  

        .row {
            margin-top: 18px;
        } 
             
        </style>
        `;
        const container = document.createElement("div");
        container.setAttribute("class", "container");
        this._items.forEach((item, i) => {
            if(i%2 == 0){
                row = document.createElement("div");
                row.setAttribute("class", "row");
            }
            const col = document.createElement("div");
            col.setAttribute("class", "col col-sm");
            const foodItemElement = document.createElement("food-list-item");
            // memanggil fungsi setter foodItem() pada food-list-item.
            foodItemElement.foodItem = item;           
            col.appendChild(foodItemElement);
            row.appendChild(col);
            if(i%2 == 1 || i+1 == this._items.length){
                container.appendChild(row);
            }
            console.log(container.innerHTML);
        });
       this.shadowDOM.appendChild(container);
    }

    renderError(message){
        this.shadowDOM.innerHTML = `
        <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
    }
}
customElements.define("food-list", FoodList);