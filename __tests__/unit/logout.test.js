/**
 * @jest-environment jsdom
 */
/*eslint-env jest*/
const logout = require('../../lib/logout');

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

describe('Unit tests of logout function', () => {
	beforeAll(() => {
		localStorage.setItem('token', dummyData.token);
		localStorage.setItem('expiresIn', dummyData.expiresIn);
	})

	test('Data should not be shown when logout function is called', (done) => {
		logout().then(() => {
			const token = localStorage.getItem('token');
			const expiresIn = localStorage.getItem('expiresIn');
			expect(token).toBeNull;
			expect(expiresIn).toBeNull;
			done();
		}).catch(done)
	})

	test('Should send an error if not logged in already', (done) => {
		localStorage.removeItem('token');
		expect.assertions(1);
        expect(logout()).rejects.toEqual('Must be logged in order to logout');
        done();
	})
    
});
