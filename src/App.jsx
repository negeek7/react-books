import { useContext, useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { createNewBook, deleteBook, fetchBooks, updateBookList } from "./api/api";
import { BookContext } from "./context/BookContext";

export default function App() {

    const {bookList} = useContext(BookContext)

    return (
        <div className="app">
            {bookList && bookList.length > 0 &&
                <>
                    <h1>Reading List</h1>
                    <BookList />
                </>
            }
            <BookCreate />
        </div>
    )
}