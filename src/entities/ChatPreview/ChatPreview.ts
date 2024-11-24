export interface ChatPreview {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    images: Image[];
    last_message: string;
    self: boolean;
    time: string;
}

export interface Image {
    id: number;
    link: string;
    number: number;
}