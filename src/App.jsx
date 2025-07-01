export default function App () {

    const [bookList, setBookList] = useState([]);




    const handleBookCreate = (book) => {
        // book object to update bookList state
        console.log(book, "book");
    }   

    return (
        <div>
            <BookCreate onSubmit={handleBookCreate}/>
        </div>
    )
}