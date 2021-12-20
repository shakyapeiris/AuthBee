const getData = () => {
    return new Promise((resolve, reject) => {
        const expiresIn = localStorage.getItem('expiresIn');
        const token = localStorage.getItem('token');
        if (!token) {
            const errorMessage = new Error(
                'Must be logged in order to retrieve data'
            );
            reject(errorMessage);
        }
        resolve({ expiresIn, token });
    });
};

module.exports = getData;
