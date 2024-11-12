import {get} from '../../../shared/api/api.js';

/**
 * Fetches the list of users.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects.
 */
export async function getMatches() {
	try {
		const response = await get('/matches');
		return response.json();

	} catch (error) {
		console.error(error);
		return [];
	}
}