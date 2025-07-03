import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { createNewBook, deleteBook, fetchBooks, updateBookList } from "./api/api";

export default function App() {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    async function getBooks(){
        const result = await fetchBooks();
        setBookList(result);
    }

    const handleBookCreate = async (title) => {
        // book object to update bookList state
        // setBookList([...bookList, bookObj]);
        const book = await createNewBook({title});
        setBookList([...bookList, book]);
    }

    const handleDeleteBook = async (id) => {
        await deleteBook(id);
        const updateBookList = bookList.filter((book, index) => {
            return id !== book.id;
        })
        setBookList(updateBookList);
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