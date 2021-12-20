/**
 * @jest-environment jsdom
 */
/*eslint-env jest*/
const login = require('../../lib/login');

let values = {};
window.localStorage.setItem = jest.fn((key, value) => {
    values[key] = value;
});
window.localStorage.getItem = jest.fn((key) => values[key]);

const dummyData = {
    token: '1234',
    expiresIn: 24,
};

describe('Unit tests of login module', () => {
    test('Should set data in local storage after logging', (done) => {
        login(dummyData)
            .then(() => {
                expect(
                    JSON.parse(localStorage.getItem('loginData'))
                ).toStrictEqual(dummyData);
                done();
            })
            .catch(done);
    });
});
