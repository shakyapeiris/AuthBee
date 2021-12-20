/**
 * @jest-environment jsdom
 */
/*eslint-env jest*/
const verify = require('../../lib/verify');

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

describe('Unit tests of verify function', () => {
	test('Should send false if expiration time is not set', (done) => {
		expect(verify()).toBe(false);
		done();
	});

	test('Should send true if expiration time is not reached', (done) => {
		const expirationDate = new Date().getTime() + dummyData.expiresIn * 3600000;
		localStorage.setItem('token', dummyData.token);
		localStorage.setItem('expiresIn', expirationDate);

		expect(verify()).toBe(true);
		done()
	});

	test('Should send false if expired', (done) => {
		const expirationDate = new Date().getTime() + dummyData.expiresIn * 3600000;
		localStorage.setItem('token', dummyData.token);
		localStorage.setItem('expiresIn', expirationDate);

		jest
		  .useFakeTimers()
		  .setSystemTime(expirationDate + 500);

		expect(verify()).toBe(false);
		done()
	})
})
