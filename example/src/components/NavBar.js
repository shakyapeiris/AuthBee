import React, { useContext } from 'react';
import { authContext } from '../context/authContext';
import { navContext } from '../context/navContext';
import classes from './NavBar.module.css';
import { IconUserCircle, IconLogout } from "@tabler/icons"


const NavBar = ({ children }) => {
    const authCtx = useContext(authContext);
    const navCtx = useContext(navContext);
    return (
        <main className={classes.Main}>
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
                            Documentation
                        </li>
                        {authCtx.token && (
                            <li
                                className={classes.account}
                                onClick={() => {
                                    alert(`Your token is: ${authCtx.token}`)
                                }}
                            >
                                <IconUserCircle />
                            </li>
                        )}
                        {authCtx.token && (
                            <li
                                className={classes.logout}
                                onClick={() => {
                                    authCtx.logout(() => {
                                        navCtx.navigate('/')
                                    });
                                }}
                            >
                                <IconLogout />
                                Logout
                            </li>
                        )}
                        {!authCtx.token && (
                            <li
                                className={classes.testBtn}
                                onClick={() => {
                                    navCtx.navigate('/login');
                                }}
                            >
                                Test It Out!
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
            <div className={classes.webPage}>{children}</div>
        </main>
    );
};

export default NavBar;
