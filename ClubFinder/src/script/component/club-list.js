import '../component/club-list-item.js'

class ClubList extends HTMLElement{
    set clubItems(items){
        this._items = items;
        this.render();
    }

    render(){
        this._items.forEach(item => {
            const clubItemElement = document.createElement("club-list-item");
            // memanggil fungsi setter clubItem() pada club-list-item.
            clubItemElement.clubItem = item;
            this.appendChild(clubItemElement);
        });
    }

    renderError(message){
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
    }
}
customElements.define("club-list", ClubList);