export interface Chat {
    username: string;
    profile: Profile;
    images: Image[];
    messages: Message[];
}

export interface Profile {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    gender: string;
    target: string;
    about: string;
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