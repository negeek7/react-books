const API_URL = "http://localhost:8000/books"

export async function fetchBooks() {
    const result = await fetch(API_URL);
    const data = result.json();

    return data;
}