export default function BookCreate({onSubmit}) {


    const [bookValue, setBookValue] = useState('');

    const handleBookInput = (e) => {
        const value = e.target.value;
        setBookValue(value);
    }

    const handleBookAdd = () => {
        if(!bookValue) return;
        setBookValue('');
        onSubmit(bookValue);
    }

    return (
        <div>
            <input type="text" value={bookValue} onChange={handleBookInput} />
            <button onClick={handleBookAdd}>Add</button>
        </div>
    )
}
