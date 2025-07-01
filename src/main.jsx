import {createRoot} from 'react-dom/client'; 
import App from './App';


const rootEle = document.getElementById('root');

const root = createRoot(rootEle);

root.render(<App />);