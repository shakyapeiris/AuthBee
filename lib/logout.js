const logout = () => {
    return new Promise((resolve, reject) => {
        const loginData = localStorage.getItem('loginData');
        if (!loginData) {
            const errorMessage = new Error('Must be logged in order to logout');
            reject(errorMessage);
        }

        localStorage.removeItem('loginData');
        resolve();
    });
};

module.exports = logout;
