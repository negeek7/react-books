import { useContext } from "react";
import BookContext from '../context/BookContext';

export default function useBookContext(){
    return useContext(BookContext);
} 