import {post} from '../../../shared/api/api';

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
export async function signupUser(login: string, password: string, gender: string, age: number): Promise<boolean> {
	try {
		const body = {
			user: {
				'username': login,
				'password': password,
			},
			profile: {
				'gender': gender, 
				'age': age,
			}
		};
		await post('/signup', body);
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}