import BookCard from './BookCard';

export default function BookList({list}) {
    return (
        <div className="book-list">
            {
                list.map((book, index) => {
                    return (
                        <BookCard key={book.id} book={book}/>
                    )
                })
            }
        </div>
    )
}