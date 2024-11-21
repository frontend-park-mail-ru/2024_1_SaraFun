import {get} from '../../../shared/api/api';
import {ChatPreview} from '../../../entities/ChatPreview/ChatPreview';

/**
 * Fetches the list of users.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects.
 */
export async function getChatPreviews(): Promise<ChatPreview[]> {
	try {
		const response = await get('/chats');
		const previews: ChatPreview[] = await response.json();
		return previews;

	} catch (error) {
		console.error(error);
		return [];
	}
}