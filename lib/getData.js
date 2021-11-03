const getData = () => {
    return new Promise((resolve, reject) => {
        const loginData = localStorage.getItem('loginData');
        if (!loginData) {
            const errorMessage = new Error(
                'Must be logged in order to retrieve data'
            );
            reject(errorMessage);
        }
        resolve(loginData);
    });
};

module.exports = getData;
