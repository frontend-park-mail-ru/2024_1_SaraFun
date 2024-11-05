import {post} from '../../../shared/api/api.js';

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
		const response = await post('http://5.188.140.7:8080/signin', JSON.stringify(body));
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}