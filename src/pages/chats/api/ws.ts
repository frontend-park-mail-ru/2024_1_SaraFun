import {get} from '../../../shared/api/api';
import { BASE_URL } from "../../../shared/constants/baseURL";

export async function ws(): Promise<any> {
	try {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'Upgrade',
                'Upgrade': 'websocket'
            },
            credentials: 'include'
        };
        const response = await fetch(`${BASE_URL}/ws`, options);
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
		const previews: any = await response.json();
		return previews;

	} catch (error) {
		console.error(error);
		return null;
	}
}
