import '../component/club-list-item.js'

class ClubList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set clubItems(items){
        this._items = items;
        // try {
        //     this.render();
        // } catch (error) {
        //     console.log(error);
        // }
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
        </style>
        `;
        this._items.forEach(item => {
            const clubItemElement = document.createElement("club-list-item");
            // memanggil fungsi setter clubItem() pada club-list-item.
            clubItemElement.clubItem = item;
            console.log(clubItemElement);
            this.shadowDOM.appendChild(clubItemElement);
        });
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
customElements.define("club-list", ClubList);