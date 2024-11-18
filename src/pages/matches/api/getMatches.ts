import {get} from '../../../shared/api/api';
import {User} from '../../../entities/User/User';

/**
 * Fetches the list of users.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects.
 */
export async function getMatches(): Promise<User[]> {
	try {
		const response = await get('/matches');
		const matches: User[] = await response.json();
		return matches;

	} catch (error) {
		console.error(error);
		return [];
	}
}