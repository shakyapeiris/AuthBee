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

let dummyData = {
    token: '1234',
    expiresIn: 24,
};

describe('Unit tests of login module', () => {
    test('Should set data in local storage after logging', (done) => {
        login(dummyData)
            .then(() => {
                expect(
                    localStorage.getItem('token')
                ).toBe(dummyData.token);
                done();
            })
            .catch(done);
    });

    test('Should send a error if token or expiresIn is missing', (done) => {
        expect.assertions(1);
        expect(login()).rejects.toEqual('Missing the token or expiresIn');
        done();
    })
});
