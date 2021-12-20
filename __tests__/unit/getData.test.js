/**
 * @jest-environment jsdom
 */
/*eslint-env jest*/
const getData = require('../../lib/getData');

let values = {};
window.localStorage.setItem = jest.fn((key, value) => {
    values[key] = value;
});
window.localStorage.removeItem = jest.fn((key) => {
    values[key] = null;
});
window.localStorage.getItem = jest.fn((key) => values[key]);

let dummyData = {
    token: '1234',
    expiresIn: 24,
};

describe('Unit tests of getData function', () => {
    test('Should send an error if not logged in', (done) => {
        expect.assertions(1);
        expect(getData()).rejects.toEqual('Must be logged in order to retrieve data');
        done();
    });

    test('Should send data if user is already logged in', (done) => {
        localStorage.setItem('token', dummyData.token);
        localStorage.setItem('expiresIn', dummyData.expiresIn);
        dummyData.expiresIn = dummyData.expiresIn.toString();
        getData().then((data) => {
            expect(data).toStrictEqual(dummyData);
            done();
        }).catch(done);
    });
});
