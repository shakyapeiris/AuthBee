import React, { useContext } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import { navContext } from './context/navContext';

const app = () => {
    const navCtx = useContext(navContext);
    return (
        <>
            <NavBar>
                {navCtx.route === '/' ? (
                    <Home />
                ) : navCtx.route === '/login' ? (
                    <Login />
                ) : (
                    <div className="notFound">404!</div>
                )}
            </NavBar>
        </>
    );
};

export default app;
