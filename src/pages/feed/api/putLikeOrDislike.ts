import { post } from '../../../shared/api/api';

export async function putLikeOrDislike(like: boolean, userID: number): Promise<boolean> {
	try {
		const body = { 'receiver': userID, 'type': like };
		await post('/api/communications/reaction', body);
		return true;

	} catch (error) {
		if (error instanceof Response) {
            try {
                const errorData = await error.json();
                console.error('Сообщение об ошибке:', errorData);
            } catch (jsonError) {
                console.error('Ошибка при парсинге JSON:', jsonError);
            }
        }
		console.error(error);
		return false;
	}
}