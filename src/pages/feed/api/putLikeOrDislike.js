import { post } from '../../../shared/api/api.js';

export async function putLikeOrDislike(like, userID) {
	try {
		if (like) { console.log('LIKE'); } else { console.log("DISLIKE"); }
		const body = { 'like': like, 'userID': userID };
		const response = await post('http://5.188.140.7:8080/likes', body);
		return true;

	} catch (error) {
		console.error(error);
		return false;
	}
}