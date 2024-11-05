import { createRoot } from 'react-dom/client';
import * as bootstrap from 'bootstrap';

import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);