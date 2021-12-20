const login = (loginData) => {
    return new Promise((resolve, reject) => {
        if (!(loginData.token && loginData.expiresIn)) {
            const errorMessage = new Error('Missing the token or expiresIn');
            reject(errorMessage);
        }
        const expirationTime = loginData.expiresIn;
        if (isNaN(expirationTime)) {
            const errorMessage = new Error(
                'Expiration date must be an integer'
            );
            reject(errorMessage);
        }
        const expirationDate = new Date().getTime() + expirationTime * 3600000;

        loginData.expiresIn = expirationDate;
        localStorage.setItem('expiresIn', loginData.expiresIn);
        localStorage.setItem('token', loginData.token);
        resolve();
    });
};

module.exports = login;
