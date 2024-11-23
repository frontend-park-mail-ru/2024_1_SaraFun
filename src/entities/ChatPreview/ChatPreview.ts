export interface ChatPreview {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    images: Image[];
    lastMessage: string;
    date: string;
    self: boolean;
}

export interface Image {
    id: number;
    link: string;
    number: number;
}