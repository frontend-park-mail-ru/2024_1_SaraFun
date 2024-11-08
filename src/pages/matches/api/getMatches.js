import {get} from '../../../shared/api/api.js';

/**
 * Fetches the list of users.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects.
 */
export async function getMatches() {
	try {
		const response = await get('http://5.188.140.7:8080/matches');
		return response.json();

	} catch (error) {
		console.error(error);
		return [];
	}
}