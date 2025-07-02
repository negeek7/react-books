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
        throw new Error(error);
    }

}

export async function updateBookList(book, value) {
    try {
        const response = await fetch(`${API_URL}/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json", // required for json-server to parse the body
            },
            body: JSON.stringify({title: value}),
        })
        console.log("yay")
    } catch (error) {
        throw new Error(error);
    }

}