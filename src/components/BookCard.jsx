export default function BookCard({ book, index, deleteBook }) {
    return (
        <div className="book-show" onClick={() => deleteBook(book.id)}>
            <p>{book.value}</p>
        </div>
    )
}