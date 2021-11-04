import React, { createContext } from 'react';

const authContext = createContext({
	login: () => {},
	logout: () => {},
	token: null,
})

const AuthProvider = () => {
	return (
		<authContext.Provider></authContext.Provider>
	);
}
