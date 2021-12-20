const verify = () => {
    const expiresIn = localStorage.getItem('expiresIn');

    let timer;

    if (expiresIn == null || expiresIn == undefined) {
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('token');
        return false;
    }

    const remainingTime = parseInt(expiresIn) - new Date().getTime();

    timer = setTimeout(() => {
        if (remainingTime <= 1000) {
            localStorage.removeItem('expiresIn');
            localStorage.removeItem('token')
            return false
        }
    }, remainingTime - 1000);

    if (remainingTime <= 0) {
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('token');
        clearTimeout(timer);
        return false;
    }

    return true;
};

module.exports = verify;
