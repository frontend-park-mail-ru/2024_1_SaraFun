import { post } from '../../../shared/api/api';
import {ChatPreview} from '../../../entities/ChatPreview/ChatPreview';

export async function getFilteredChatPreviews(name: string): Promise<ChatPreview[]> {
	try {
        const body = {
			'search': name,
		};
		const response = await post('/chatsearch', body);
		const previews: ChatPreview[] = await response.json();
		return previews;

	} catch (error) {
		console.error(error);
		return [];
	}
}