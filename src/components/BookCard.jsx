import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookCard({ book, deleteBook }) {

    const [showEdit, setShowEdit] = useState(false);

    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEdit />
    }
    return (
        <div className="book-show" onClick={() => deleteBook(book.id)}>
            <button onClick={() => setShowEdit(true)}>Edit</button>
            <button>Delete</button>
            {content}
        </div>
    )
}