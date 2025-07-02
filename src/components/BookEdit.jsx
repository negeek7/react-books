import { useState } from "react";

export default function BookEdit({ book, onEdit }) {

    const [editValue, setEditValue] = useState(book.title);

    return (
            <form className="book-edit" onSubmit={(e) => {
                e.preventDefault();
                onEdit(editValue);
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