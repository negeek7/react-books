import { useContext } from 'react';
import BookCard from './BookCard';
import { BookContext } from '../context/BookContext';

export default function BookList() {

    const {bookList} = useContext(BookContext);

    return (
        <div className="book-list">
            {
                bookList.map((book) => {
                    return (
                        <BookCard 
                            key={book.id} 
                            book={book}
                        />
                    )
                })
            }
        </div>
    )
}