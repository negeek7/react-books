const API_URL = "http://localhost:8000/books"

export async function fetchBooks() {
    const result = await fetch(API_URL);
    const data = await result.json();
    return data;
}

export async function createBook(book) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // required for json-server to parse the body
            },
            body: JSON.stringify(book),
        })
        console.log("yay")
    } catch (error) {
        console.log(errpr, "error in updating book list")

    }

}

export async function updateBookList(book, value) {
    try {
        // using url params (id) to update the book
        const response = await fetch(`${API_URL}/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json", // required for json-server to parse the body
            },
            body: JSON.stringify({ title: value }),
        })
        console.log("yay")
    } catch (error) {
        console.log(errpr, "error in updating book list")
    }

}

export async function deleteBook(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        console.log(error, "error in deleting book")
    }

}