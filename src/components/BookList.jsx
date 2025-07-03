import useBookContext from '../hooks/use-book-context';
import BookCard from './BookCard';

export default function BookList() {

    const { bookList } = useBookContext();

    return (
        <>
            {
                bookList && bookList.length > 0 &&
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
            }
        </>
    )
}