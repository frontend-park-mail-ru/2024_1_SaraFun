/*import { BASE_URL } from "../../../shared/constants/baseURL";

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
}*/
import { BASE_URL } from "../../../shared/constants/baseURL";

export function createWebSocket(): WebSocket {
    const wsUrl = `${BASE_URL.replace(/^http/, 'ws')}/ws`;
    const socket = new WebSocket(wsUrl);

    socket.addEventListener('open', () => {
        console.log('WebSocket connection established');
    });

    socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data);
        console.log('New message received:', message);
        // Добавьте логику для обработки полученных сообщений
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed');
    });

    socket.addEventListener('error', (error) => {
        console.error('WebSocket error:', error);
    });

    return socket;
}
