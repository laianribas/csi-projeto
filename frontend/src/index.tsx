import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';

const theme = createTheme();


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
