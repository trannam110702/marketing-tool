import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
console.log(rootElement.getAttribute('data-title'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

