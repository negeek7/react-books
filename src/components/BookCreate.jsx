import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export default function BookCreate({onSubmit}) {

    const [bookValue, setBookValue] = useState('');
    const {handleCreateBook} = useContext(BookContext);
    
    const handleBookInput = (e) => {
        const value = e.target.value;
        setBookValue(value);
    }

    const handleBookAdd = (e) => {
        e.preventDefault();
        if(!bookValue) return;
        handleCreateBook(bookValue);
        setBookValue('');
    }

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleBookAdd}>
                <input type="text" value={bookValue} onChange={handleBookInput} />
                <button className="button" onClick={handleBookAdd}>Add</button>
            </form>
        </div>
    )
}
