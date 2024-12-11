type WebSocketMessageHandler = (data: any) => void;

export class WebSocketManager {
    private socket: WebSocket;
    private handlers: Map<string, WebSocketMessageHandler[]> = new Map();

    constructor(url: string) {
        this.socket = new WebSocket(url);

        this.socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
        });

        this.socket.addEventListener('open', () => {
            console.log('WebSocket connection opened');
        });

        this.socket.addEventListener('close', () => {
            console.log('WebSocket connection closed');
        });

        this.socket.addEventListener('error', (error) => {
            console.error('WebSocket error:', error);
        });
    }

    public close() {
        this.socket.close();
    }
}