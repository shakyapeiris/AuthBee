import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AuthProvider from './context/authContext';
import NavProvider from './context/navContext';
import './global.css';

ReactDOM.render(
    <AuthProvider>
        <NavProvider routes={['/', '/login']}>
            <App />
        </NavProvider>
    </AuthProvider>,
    document.getElementById('root')
);
