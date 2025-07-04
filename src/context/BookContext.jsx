import { createContext, useCallback, useState } from "react";
import { createNewBook, deleteBook, fetchBooks, updateBookList } from "../api/api";

const BookContext = createContext();

function BookContextProvider ({ children }) {

    const [bookList, setBookList] = useState([]);

    const getBooks = useCallback( async () => {
        const list = await fetchBooks();
        setBookList(list);
    }, [])

    // const getBooksCallback = getBooks();

    const handleCreateBook = async (title) => {
        const book = await createNewBook({title});
        setBookList([...bookList, book]);
    }

    const handleEditBook = async (book, title) => {
        const response = await updateBookList(book, title);
        const updateList = bookList.map((book) => {
            if(book.id === response.id) {
                return {...book, title}
            }
            return book;
        })
        setBookList(updateList);
    }

    const handleDeleteBook = async (id) => {
        await deleteBook(id);
        const updateList = bookList.filter(book => {
            return book.id !== id;
        })
        setBookList(updateList);
    }

    return (
        <BookContext.Provider value={{bookList, getBooks, handleCreateBook, handleEditBook, handleDeleteBook}}>
            {children}
        </BookContext.Provider>
    )
}

export {BookContextProvider};
export default BookContext;