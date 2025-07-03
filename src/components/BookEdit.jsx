import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export default function BookEdit({ book, onSubmit }) {

    const [editValue, setEditValue] = useState(book.title);

    return (
            <form className="book-edit" onSubmit={(e) => {
                e.preventDefault();
                onSubmit(editValue);
            }}>
                <input 
                    className="input"
                    type="text" 
                    value={editValue}
                    onChange={(e) => {
                        setEditValue(e.target.value);
                    }}
                />
            </form>
    )
}   