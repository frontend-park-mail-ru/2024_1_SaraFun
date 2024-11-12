import { post } from '../../../shared/api/api.js';

export async function putLikeOrDislike(like: boolean, userID: number): Promise<boolean> {
	try {
		const body = { 'receiver': userID, 'type': like };
		await post('/reaction', JSON.stringify(body));
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}