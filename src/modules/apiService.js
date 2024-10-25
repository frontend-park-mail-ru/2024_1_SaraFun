import {get, post} from './api.js';

/**
 * Logs in a user.
 * 
 * @param {string} login - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<boolean>} - A promise that resolves to true 
 * 								if login is successful, otherwise false.
 */
export async function loginUser(login, password) {
	try {
		const body = {'username': login, 'password': password};
		const response = await post('http://5.188.140.7:8080/signin', body);
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/**
 * Registers a new user.
 * 
 * @param {string} login - The username of the new user.
 * @param {string} password - The password of the new user.
 * @param {string} gender - The gender of the new user.
 * @param {string} age - The age of the new user.
 * @returns {Promise<boolean>} - A promise that resolves to true 
 * 								if registration is successful, otherwise false.
 */
export async function registerUser(login, password, gender, age) {
	try {
		const body = {
			'username': login, 
			'password': password, 
			'gender': gender, 
			'age': parseInt(age)
		};
		const response = await post('http://5.188.140.7:8080/signup', body);
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/**
 * Fetches the list of users.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects.
 */
export async function fetchUsers() {
	try {
		const response = await get('http://5.188.140.7:8080/getusers');
		return response.json();

	} catch (error) {
		console.error(error);
		return [];
	}
}

/**
 * Checks if the user is authenticated.
 * 
 * @returns {Promise<boolean>} - A promise that resolves to true
 * 								if the user is authenticated, otherwise false.
 */
export async function checkAuth() {
	try {
		const response = await get('http://5.188.140.7:8080/checkauth');
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}

/**
 * Logs out the user.
 * 
 * @returns {Promise<boolean>} - A promise that resolves to true 
 * 								if logout is successful, otherwise false.
 */
export async function logout() {
	try {
		const response = await get('http://5.188.140.7:8080/logout');
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}