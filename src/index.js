import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const title = rootElement.getAttribute('data-title');
const style = rootElement.getAttribute('data-style');
root.render(
    <React.StrictMode>
        <App title={title} style={style}/>
    </React.StrictMode>
);

