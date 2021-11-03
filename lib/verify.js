const verify = (callback) => {
    const { expiresIn } = localStorage.getItem('loginData');

    const remainingTime = new Date(expiresIn).getTime() - new Date().getTime();

    if (remainingTime <= 0) {
        localStorage.removeItem('loginData');
        callback();
        return false;
    }

    return true;
};

module.exports = verify;
