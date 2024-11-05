import { post } from '../../../shared/api/api.js';

export async function putLikeOrDislike(like, userID) {
	try {
		const body = { "receiver": parseInt(userID), "type": like };
		const response = await post('http://5.188.140.7:8080/reaction', JSON.stringify(body));
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}