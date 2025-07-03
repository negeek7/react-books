import { useContext } from 'react';
import BookCard from './BookCard';
import { BookContext } from '../context/BookContext';

export default function BookList({list, deleteBook, editBook}) {

    const {bookList} = useContext(BookContext);


    return (
        <div className="book-list">
            {
                bookList.map((book, index) => {
                    return (
                        <BookCard 
                            key={book.id} 
                            book={book} 
                            deleteBook={deleteBook}
                            editBook={editBook}
                        />
                    )
                })
            }
        </div>
    )
}