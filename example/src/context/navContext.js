import React, { createContext, useState } from 'react';
import { authContext } from './authContext';

export const navContext = createContext({
    navigate: (route) => {},
    route: '/',
});

const NavProvider = ({ routes, children }) => {
    const [route, setRoute] = useState('/');
    const navigate = (route) => {
        if (!routes.includes(route)) {
            setRoute('*');
        } else {
            setRoute(route);
        }
    };

    const value = {
        route,
        navigate,
    };
    return <navContext.Provider value={value}>{children}</navContext.Provider>;
};

export default NavProvider;
