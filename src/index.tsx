import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import General from './General/General';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

    <BrowserRouter>

      <General /> {/* 'App' components*/}
      
    </BrowserRouter>

  </React.StrictMode>
);