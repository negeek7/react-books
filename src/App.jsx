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

    const handleEditBook = async (book, title) => {
        // make the api call to update the book in the server
        // get the response from the server (the updated object)
        // udpate the local state with the new object from response
        try {
            const response = await updateBookList(book, title);
    
            const updatedList = bookList.map((book) => {
                if(book.id === response.id) {
                    return response;
                }
                return book;
            })
            console.log(updatedList, "updatedList")
            setBookList(updatedList);
        } catch (error) {
            console.log(error, "error in updating book list");
        }
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