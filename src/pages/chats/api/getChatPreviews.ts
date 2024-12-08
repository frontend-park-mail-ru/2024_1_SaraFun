import {get} from '../../../shared/api/api';
import {ChatPreview} from '../../../entities/ChatPreview/ChatPreview';

export async function getChatPreviews(): Promise<ChatPreview[]> {
	try {
		const response = await get('/api/message/chats');
		const previews: ChatPreview[] = await response.json();
		return previews;

	} catch (error) {
		console.error(error);
		return [];
	}
}