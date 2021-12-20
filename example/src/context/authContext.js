import React, { createContext, useState, useEffect } from 'react';
import { login, logout, verify, getData } from 'authbee';

export const authContext = createContext({
    login: () => {},
    logout: () => {},
    token: null,
});

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const verified = verify();

        if (verified) {
            getData()
                .then(({ token }) => {
                    setToken(token);
                    console.log(token);
                })
                .catch(console.log);
        } else {
            console.log('Unverified!');
        }
    }, []);

    const value = {
        login,
        logout,
        token,
    };

    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    );
};

export default AuthProvider;
