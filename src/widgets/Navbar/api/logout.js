import {get} from '../../../shared/api/api.js';

/**
 * Logs out the user.
 * 
 * @returns {Promise<boolean>} - A promise that resolves to true 
 * 								if logout is successful, otherwise false.
 */
export async function logout() {
	try {
		await get('/logout');
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}