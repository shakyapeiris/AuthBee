const login = (loginData) => {
    return new Promise((resolve, reject) => {
        const expirationTime = loginData.expiresIn;
        const expirationDate = new Date().getTime() + expirationTime * 3600000;
        if (!(loginData.token && loginData.expiresIn)) {
            const errorMessage = new Error('Missing the token or expiresIn');
            reject(errorMessage);
        } else if (isNaN(expirationTime)) {
            const errorMessage = new Error(
                'Expiration date must be an integer'
            );
            reject(errorMessage);
        }

        loginData.expiresIn = expirationDate;
        localStorage.setItem('loginData', JSON.stringify(loginData));
        resolve();
    });
};

module.exports = login;
