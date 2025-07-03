import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBookContext from "./hooks/use-book-context";

export default function App() {

    const { getBooks } = useBookContext();

    useEffect(() => {
        getBooks();
    }, [])

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    )
}