class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
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
        <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
        <style>
        img{
            width: 2vw;
            height: 2vw;
        }
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
        
        .search-container > button {
            width: 6vw;
            height: 6vw;
            cursor: pointer;
            margin-top: auto;
            margin-bottom: auto;
            margin-left: auto;
            background-color: black;
            color: white;
            border-radius: 50%;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                margin-bottom: 12px;
            }
        
        }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search any meal" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit"><img src="https://www.iconsdb.com/icons/preview/white/search-13-xxl.png"></button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
customElements.define('search-bar', SearchBar);
