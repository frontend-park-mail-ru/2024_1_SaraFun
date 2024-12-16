import { post } from '../../../shared/api/api';

export async function putLikeOrDislike(like: boolean, userID: number): Promise<string | boolean> {
	try {
		const body = { 'receiver': userID, 'type': like };
		await post('/api/communications/reaction', body);
		return true;

	} catch (error) {
		console.error(error);
		if (error instanceof Error) {
            const errorMessage = error.message.split(', ').pop();
            console.error('Сообщение об ошибке:', errorMessage);
            return errorMessage;
        }
		return false;
	}
}