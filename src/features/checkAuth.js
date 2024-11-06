import {get} from '../shared/api/api.js';

/**
 * Checks if the user is authenticated.
 * 
 * @returns {Promise<boolean>} - A promise that resolves to true
 * 								if the user is authenticated, otherwise false.
 */
export async function checkAuth() {
	try {
		await get('http://5.188.140.7:8080/checkauth');
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}