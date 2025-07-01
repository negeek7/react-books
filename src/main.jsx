import {createRoot} from 'react-dom/client'; 
import App from './App';
import './index.css'

const rootEle = document.getElementById('root');
const root = createRoot(rootEle);

root.render(<App />);