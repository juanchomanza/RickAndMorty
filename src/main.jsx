import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './assets/Components/App';
import { Header } from './assets/Components/Header';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
);
