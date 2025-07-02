import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookCard({ book, deleteBook, editBook }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleBookEdit = (value) => {
        editBook(book, value)
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEdit book={book} onSubmit={handleBookEdit} />
    }

    
    return (
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={() => setShowEdit(!showEdit)}>Edit</button>
                <button className="delete" onClick={() => deleteBook(book.id)}>Delete</button>
            </div>
        </div>
    )
}