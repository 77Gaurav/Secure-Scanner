import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './app.js';

// Use createRoot instead of ReactDOM.render
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);