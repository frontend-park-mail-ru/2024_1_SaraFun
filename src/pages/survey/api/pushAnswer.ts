import {post} from '../../../shared/api/api';

export async function pushAnswer(question: string, comment: string, rating: number, grade: number): Promise<boolean> {
	try {
		const body = {'question': question, 'comment': comment, 'rating': rating, 'grade': grade};
		await post('/sendsurvey', body);
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}