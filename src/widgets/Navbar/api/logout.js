import {get} from '../../../shared/api/api.js';

/**
 * Logs out the user.
 * 
 * @returns {Promise<boolean>} - A promise that resolves to true 
 * 								if logout is successful, otherwise false.
 */
export async function logout() {
	try {
		await get('http://5.188.140.7:8080/logout');
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}