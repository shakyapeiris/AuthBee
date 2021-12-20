const verify = () => {
    const expiresIn = localStorage.getItem('expiresIn');

    if (expiresIn == null || expiresIn == undefined) {
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('token');
        return false;
    }

    const remainingTime = new Date(expiresIn).getTime() - new Date().getTime();

    if (remainingTime <= 0) {
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('token');
        return false;
    }

    return true;
};

module.exports = verify;
