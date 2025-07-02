import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App () {

    const [bookList, setBookList] = useState([]);

    const handleBookCreate = (book) => {
        const bookObj = {};
        bookObj.id = Math.floor(100 + Math.random() * 900);
        bookObj.title = book;
        // book object to update bookList state
        setBookList([...bookList, bookObj]);
    }   

    const handleDeleteBook = (id) => {
        const updateBookList = bookList.filter((book, index) => {
            return id !== book.id;
        })
        setBookList(updateBookList);
    }

    const handleEditBook = (book, value) => {
        const updatedList = [...bookList].map((b, index) => {
            if(b.id === book.id) {
                return {...b, title: value};
            }
            return b;
        })
        setBookList(updatedList);
    }

    console.log(bookList, "LIST")

    return (
        <div>
            {bookList && bookList.length > 0 && 
                <BookList list={bookList} deleteBook={handleDeleteBook} editBook={handleEditBook}/>}
            <BookCreate onSubmit={handleBookCreate}/>
        </div>
    )
}