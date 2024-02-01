import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifApp } from './GifApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>,
);
