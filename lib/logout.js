const logout = () => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token');
        if (!token) {
            const errorMessage = new Error('Must be logged in order to logout');
            reject(errorMessage);
        }

        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
        resolve();
    });
};

module.exports = logout;
