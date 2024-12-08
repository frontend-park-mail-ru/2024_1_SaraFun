import { post } from '../../../shared/api/api';

export async function putLikeOrDislike(like: boolean, userID: number): Promise<boolean> {
	try {
		const body = { 'receiver': userID, 'type': like };
		await post('/api/communications/reaction', body);
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}