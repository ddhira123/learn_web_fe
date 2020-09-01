class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        const styles = document.querySelector('link[href*="fontawesome"]');
        this.render();
        if (styles) {
            this.shadowRoot.appendChild(styles.cloneNode());
        }
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get inputValue(){
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render(){
        this.shadowDOM.innerHTML= `
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <style>
        .search-container {
            max-width: 80%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            margin: auto;
            padding: 3px 16px;
            border-radius: 30px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
        }
        
        .search-container > input {
            width: 90%;
            padding: 6px;
            border: 0;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: black;
            font-weight: normal;
        }
        
        .btn {
            width: 6vw;
            height: 6vw;
            cursor: pointer;
            margin-top: auto;
            margin-bottom: auto;
            margin-left: auto;
            background-color: black;
            border-radius: 50%;
        }
        
        @media screen and (max-width: 700px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                margin: auto;
            }
            .btn {
                width: 100%;
                cursor: pointer;
                margin: auto;
                background-color: black;
                border-radius: 30px;
            }
        
        }
        @media screen and (min-width: 700px){
            span{
                font-size: 1.5vw;
            }
        
        }
        </style>
        <div id="search-container" class="search-container">
            <input class="form-control" placeholder="Search any meal" id="searchElement" type="search">
            <button class="btn btn-circle mr-3 d-flex justify-content-center align-items-center" id="searchButtonElement" type="submit">
                <span style="color: white">search</span>
            </button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
customElements.define('search-bar', SearchBar);
