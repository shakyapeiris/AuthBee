import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <>
            <header className={classes.Header}>
                <nav className={classes.Nav}>
                    <ul>
                        <li>Home</li>
                        <li>Login</li>
                        <li>Account</li>
                        <li>Logout</li>
                    </ul>
                </nav>
            </header>
            <div></div>
        </>
    );
};

export default NavBar;
