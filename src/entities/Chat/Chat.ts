export interface Chat {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    images: Image[];
    messages: Message[];
}

export interface Image {
    id: number;
    link: string;
    number: number;
}

export interface Message {
    body: string;
    date: string;
    self: boolean;
}