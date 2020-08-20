function main() {
    const baseUrl = "https://web-server-book-dicoding.appspot.com";

    const getBook = async () => {
        // Async/await style
        try {
            const response = await fetch(`${baseUrl}/list`);
            const responseJson = await response.json();
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
             } else {
                renderAllBooks(responseJson.books);
             }
        } catch (error) {
            showResponseMessage(error);            
        }

        // OLD Style
        // // tuliskan kode di sini!
        // const xhr = new XMLHttpRequest();
        // //menetapkan callback jika response sukses dan error
        // xhr.onload = function() {
        //     const responseJson = JSON.parse(this.responseText);
        //     if(responseJson.error) {
        //     showResponseMessage(responseJson.message);
        //     } else {
        //     renderAllBooks(responseJson.books);
        //     }
        // }
    
        // xhr.onerror = function() {
        //     showResponseMessage();
        // }
    
        // // Membuat GET request dan menetapkan target URL
        // xhr.open("GET", `${baseUrl}/list`);
        // // Mengirimkan request
        // xhr.send();
    };


    const insertBook = async (book) => {
        // Async/await style
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": "12345"
                },
                body: JSON.stringify(book)
            }

            const response = await fetch(`${baseUrl}/add`, options);
            const responseJson = await response.json();
            showResponseMessage(responseJson.message);
            getBook();
        } catch (error) {
            showResponseMessage(error);
        }

        // OG Style
        // // tuliskan kode di sini!
        // const xhr = new XMLHttpRequest();
        // xhr.onload = function(){
        //     const responseJson = JSON.parse(this.responseText);
        //     showResponseMessage(responseJson.message);
        //     getBook();
        // }

        // xhr.onerror = function() {
        //     showResponseMessage();
        // }

        // // Membuat POST request dan menetapkan target URL
        // xhr.open("POST", `${baseUrl}/add`);

        // // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.setRequestHeader("X-Auth-Token", "12345");

        // // Mengirimkan request
        // xhr.send(JSON.stringify(book));
    };

    const updateBook = async (book) => {
        // Async/await style
        try {
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": "12345"
                },
                body: JSON.stringify(book)
            }

            const response = await fetch(`${baseUrl}/edit/${bookId}`, options);
            const responseJson = await response.json();
            showResponseMessage(responseJson.message);
            getBook();
        } catch (error) {
            showResponseMessage(error);
        }

    //      OG STyle
    //     // tuliskan kode di sini!
    //     const xhr = new XMLHttpRequest();
    //     xhr.onload = function() {
    //         const responseJson = JSON.parse(this.responseText);
    //         showResponseMessage(responseJson);
    //         getBook();
    //     }
    //     xhr.onerror = function(){
    //         showResponseMessage();
    //     }
    //     // Membuat PUT request dan menetapkan target URL
    //     xhr.open("PUT", `${baseUrl}/edit/${book.id}`);

    //     // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
    //     xhr.setRequestHeader("Content-Type", "application/json");
    //     xhr.setRequestHeader("X-Auth-Token", "12345");

    //     // Mengirimkan request
    //     xhr.send(JSON.stringify(book));

    };

    const removeBook = async (bookId) => {
        // tuliskan kode di sini!
        // Async/await Style
        try {
            const options = {
                method: "DELETE",
                headers: {
                    "X-Auth-Token": "12345"
                },
            };
            const response = await fetch(`${baseUrl}/delete/${bookId}`, options);
            const responseJson = await response.json();
            showResponseMessage(responseJson.message);
            getBook();            
        } catch (error) {
            showResponseMessage(error);
        }

        // OG Style, to make this on, uncomment the following lines, comment the lines above and remove the "async"
        // const xhr = new XMLHttpRequest();
        // xhr.onload = function(){
        //     const responseJson = JSON.parse(this.responseText);
        //     showResponseMessage(responseJson);
        //     getBook();
        // }
        // xhr.onerror = function(){
        //     showResponseMessage();
        // }

        // // Membuat DELETE request dan menetapkan target URL
        // xhr.open("DELETE", `${baseUrl}/delete/${bookId}`);

        // // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
        // xhr.setRequestHeader("X-Auth-Token", "12345");

        // // Mengirimkan request
        // xhr.send();
    };






    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllBooks = (books) => {
        const listBookElement = document.querySelector("#listBook");
        listBookElement.innerHTML = "";

        books.forEach(book => {
            listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h5>(${book.id}) ${book.title}</h5>
                            <p>${book.author}</p>
                            <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const bookId = event.target.id;
                removeBook(bookId);
            })
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        const inputBookId = document.querySelector("#inputBookId");
        const inputBookTitle = document.querySelector("#inputBookTitle");
        const inputBookAuthor = document.querySelector("#inputBookAuthor");
        const buttonSave = document.querySelector("#buttonSave");
        const buttonUpdate = document.querySelector("#buttonUpdate");

        buttonSave.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };
            insertBook(book)
        });

        buttonUpdate.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };

            updateBook(book)
        });
        getBook();
    });
}

export default main;