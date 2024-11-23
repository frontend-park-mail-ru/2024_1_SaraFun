import {get} from '../../../shared/api/api';
import { Statistics } from '../../../entities/Statistics';

export async function getStats(): Promise<Statistics[]> {
	try {
		const response = await get('/getstats');
		const stats: Statistics[] = await response.json();
		return stats;

	} catch (error) {
		console.error(error);
		return [];
	}
}