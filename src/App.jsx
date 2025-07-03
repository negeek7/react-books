import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { createBook, deleteBook, fetchBooks, updateBookList } from "./api/api";

export default function App() {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        getBooks();
        console.log(" i ran ")
    }, []);

    const handleBookCreate = (title) => {
        // book object to update bookList state
        // setBookList([...bookList, bookObj]);
        createBook({title});
    }

    const handleDeleteBook = (id) => {
        const updateBookList = bookList.filter((book, index) => {
            return id !== book.id;
        })
        setBookList(updateBookList);
        deleteBook(id);
    }

    const handleEditBook = (book, value) => {
        const updatedList = bookList.map((b, index) => {
            if (b.id === book.id) {
                return { ...b, title: value };
            }
            return b;
        })
        setBookList(updatedList);
        updateBookList(book, value)
    }

    async function getBooks(){
        const result = await fetchBooks();
        setBookList(result);
    }

    return (
        <div className="app">
            {bookList && bookList.length > 0 &&
                <>
                    <h1>Reading List</h1>
                    <BookList list={bookList} deleteBook={handleDeleteBook} editBook={handleEditBook} />
                </>
            }
            <BookCreate onSubmit={handleBookCreate} />
        </div>
    )
}