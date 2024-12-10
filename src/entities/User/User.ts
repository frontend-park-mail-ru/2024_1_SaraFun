export interface User {
    user: number;
    username: string;
    profile: Profile;
    images: Image[];
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
}