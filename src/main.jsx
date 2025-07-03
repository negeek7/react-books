import {createRoot} from 'react-dom/client'; 
import App from './App';
import './index.css'
import {BookContextProvider} from './context/BookContext';

const rootEle 
= document.getElementById('root');
const root = createRoot(rootEle);

root.render(
    <BookContextProvider>
        <App />
    </BookContextProvider>
);