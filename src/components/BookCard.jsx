import { useContext, useState } from 'react';
import BookEdit from './BookEdit';
import { BookContext } from '../context/BookContext';

export default function BookCard({ book }) {

    const [showEdit, setShowEdit] = useState(false);
    const {handleEditBook, handleDeleteBook} = useContext(BookContext);

    const handleBookEdit = (value) => {
        handleEditBook(book, value);
        setShowEdit(false);
    }

    let content = (
        <>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <h3>{book.title}</h3>
        </>
    );
    if(showEdit) {
        content = <BookEdit book={book} onSubmit={handleBookEdit} />
    }
    
    return (
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={() => setShowEdit(!showEdit)}>Edit</button>
                <button className="delete" onClick={() => handleDeleteBook(book.id)}>Delete</button>
            </div>
        </div>
    )
}