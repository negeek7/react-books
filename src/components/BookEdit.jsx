import { useState } from "react";

export default function BookEdit({ book, onEdit, setShowEdit }) {

    const [editValue, setEditValue] = useState(book.title);

    return (
            <form className="book-edit" onSubmit={(e) => {
                e.preventDefault();
                onEdit(book, editValue);
                setShowEdit(false);
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