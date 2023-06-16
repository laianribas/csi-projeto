import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalProvider';
import { SearchProvider } from './context/SearchProvider';
import { UserProvider } from './context/UserProvider';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ModalProvider>
          <SearchProvider>

            <App />

          </SearchProvider>
        </ModalProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
);
