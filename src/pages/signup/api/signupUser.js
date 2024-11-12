import {post} from '../../../shared/api/api.js';

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
export async function signupUser(login, password, gender, age) {
	try {
		const body = {
			user: {
				'username': login,
				'password': password,
			},
			profile: {
				'gender': gender, 
				'age': parseInt(age),
			}
		};
		await post('/signup', JSON.stringify(body));
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}