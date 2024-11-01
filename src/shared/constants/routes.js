import { FeedPage } from "../../pages/feed/feed.js"
import { LoginPage } from "../../pages/login/login.js";
import { RegistrationPage } from "../../pages/signup/signup.js";

export const ROUTES_NAME = {
    LOGIN: 'login',
    FEED: 'feed',
    SIGNUP: 'signup',
};

export const ROUTES = new Map([
    [ROUTES_NAME.LOGIN, { path: '/login', view: LoginPage }],
    [ROUTES_NAME.FEED, { path: '/feed', view: FeedPage }],
    [ROUTES_NAME.SIGNUP, { path: '/signup', view: RegistrationPage }],
]);