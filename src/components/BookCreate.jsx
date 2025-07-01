import { useState } from "react";

export default function BookCreate({onSubmit}) {

    const [bookValue, setBookValue] = useState('');
    
    const handleBookInput = (e) => {
        const value = e.target.value;
        setBookValue(value);
    }

    const handleBookAdd = (e) => {
        e.preventDefault();
        if(!bookValue) return;
        setBookValue('');
        onSubmit(bookValue);
    }

    return (
        <div>
            <form onSubmit={handleBookAdd}>
                <input type="text" value={bookValue} onChange={handleBookInput} />
                <button onClick={handleBookAdd}>Add</button>
            </form>
        </div>
    )
}
