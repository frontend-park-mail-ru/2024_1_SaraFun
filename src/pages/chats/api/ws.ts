import {get} from '../../../shared/api/api';

export async function ws(): Promise<any> {
	try {
		const response = await get('/ws');
		const previews: any = await response.json();
		return previews;

	} catch (error) {
		console.error(error);
		return null;
	}
}