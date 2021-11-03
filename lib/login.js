const login = (loginData) => {
    return new Promise((resolve, reject) => {
        if (!(loginData.token && loginData.expiresIn)) {
            const errorMessage = new Error('Missing the token or expiresIn');
            reject(errorMessage);
        }
        localStorage.setItem('loginData', JSON.stringify(loginData));
        resolve();
    });
};

module.exports = login;
