const login = (loginData) => {
    return new Promise((resolve, reject) => {
        if (!loginData || !(loginData.token && loginData.expiresIn)) {
            const errorMessage = 'Missing the token or expiresIn';
            reject(errorMessage);
        }
        const expirationTime = loginData.expiresIn;
        if (isNaN(expirationTime)) {
            const errorMessage = 'Expiration date must be an integer';
            reject(errorMessage);
        }
        const expirationDate = new Date().getTime() + expirationTime * 3600000;

        loginData.expiresIn = expirationDate;
        localStorage.setItem('expiresIn', expirationDate);
        localStorage.setItem('token', loginData.token);
        resolve();
    });
};

module.exports = login;
