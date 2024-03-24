import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

if (rootElement && rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(
        rootElement,
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
