import React, { useContext } from 'react';
import { authContext } from '../context/authContext';
import { navContext } from '../context/navContext';
import classes from './NavBar.module.css';

const NavBar = ({ children }) => {
    const authCtx = useContext(authContext);
    const navCtx = useContext(navContext);
    return (
        <>
            <header className={classes.Header}>
                <h1>AuthBee</h1>
                <nav className={classes.Nav}>
                    <ul>
                        <li
                            onClick={() => {
                                navCtx.navigate('/');
                            }}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => {
                                navCtx.navigate('/docs');
                            }}
                        >
                            Docs
                        </li>
                        {authCtx.token && (
                            <li
                                onClick={() => {
                                    alert(`Your token is: ${authCtx.token}`)
                                }}
                            >
                                Account
                            </li>
                        )}
                        {authCtx.token && (
                            <li
                                onClick={() => {
                                    authCtx.logout(() => {
                                        navCtx.navigate('/')
                                    });
                                }}
                            >
                                Logout
                            </li>
                        )}
                        {!authCtx.token && (
                            <li
                                onClick={() => {
                                    navCtx.navigate('/login');
                                }}
                            >
                                Try the demo!
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
            <div>{children}</div>
        </>
    );
};

export default NavBar;
