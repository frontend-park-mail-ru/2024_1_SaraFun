import {get} from '../../../shared/api/api';
import { Question } from '../../../entities/Question';

export async function getQuestions(): Promise<Question[]> {
	try {
		const response = await get('/getquestions');
		const stats: Question[] = await response.json();
		return stats;

	} catch (error) {
		console.error(error);
		return [];
	}
}