import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App () {

    const [bookList, setBookList] = useState([]);

    const handleBookCreate = (book) => {
        const bookObj = {};
        bookObj.id = Math.floor(100 + Math.random() * 900);
        bookObj.value = book;
        // book object to update bookList state
        setBookList([...bookList, bookObj]);
    }   

    console.log(bookList, "LIST")

    return (
        <div>
            {bookList && bookList.length > 0 && <BookList list={bookList} />}
            <BookCreate onSubmit={handleBookCreate}/>
        </div>
    )
}