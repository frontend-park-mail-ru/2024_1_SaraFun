import { BASE_URL } from "../../../shared/constants/baseURL";

export function createWebSocket(): WebSocket {
    const wsUrl = `${BASE_URL.replace(/^http/, 'ws')}/api/ws`;
    const socket = new WebSocket(wsUrl);

    return socket;
}
