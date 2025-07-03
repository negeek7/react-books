const API_URL = "http://localhost:3000/books"

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
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(errpr, "error in updating book list")

    }

}

export async function updateBookList(book, title) {
    try {
        // using url params (id) to update the book
        const response = await fetch(`${API_URL}/${book.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // required for json-server to parse the body
            },
            body: JSON.stringify({title}),
        })
        const data = await response.json(); 
        return data;
    } catch (error) {
        console.log(error, "error in updating book list")
    }

}

export async function deleteBook(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
        console.log(response, "response")
    } catch (error) {
        console.log(error, "error in deleting book")
    }

}