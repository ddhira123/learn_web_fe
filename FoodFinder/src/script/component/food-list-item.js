class FoodItem extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set foodItem(item){
        this._item = item;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .meal-photo{
            display: block;
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
            
        }
        .food-info {
            padding: 24px;
        }
        
        .food-info > h2 {
            font-weight: lighter;
        }
        
        .food-info > p {
            margin-bottom: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline;
        }
        </style>
        <img class="meal-photo" src="${this._item.strMealThumb}" alt="Photo of the Meal">
        <div class="food-info">
        <p class="text-uppercase"> ${this._item.strCategory} </p>
        <h2> ${this._item.strMeal} </h2>
        
        </div>
        `;
    }
}
customElements.define("food-list-item", FoodItem);