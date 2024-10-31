import { FeedPage } from "../../pages/feed/feed.js"
import { LoginPage } from "../../pages/login/login.js";
import { RegistrationPage } from "../../pages/signup/signup.js";

export const ROUTES = [
    {
        path: '/login',
        view: LoginPage,
    },
    {
        path: '/feed',
        view: FeedPage,
    },
    {
        path: '/signup',
        view: RegistrationPage,
    },
];