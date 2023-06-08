import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalProvider';
import { SearchProvider } from './context/SearchProvider';

const theme = createTheme();


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
