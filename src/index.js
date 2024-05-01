import React from 'react';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// Assuming there is a div with id 'root' in your index.html
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);




