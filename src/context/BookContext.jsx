import { createContext, useEffect, useState } from "react";
import { createNewBook, fetchBooks } from "../api/api";

export const BookContext = createContext();

export default function BookContextProvider ({ children }) {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = async () => {
        const list = await fetchBooks();
        setBookList(list);
    }

    const createBook = async (title) => {
        const book = await createNewBook({title});
        setBookList([...bookList, book]);
    }

    return (
        <BookContext.Provider value={{bookList, createBook}}>
            {children}
        </BookContext.Provider>
    )
}