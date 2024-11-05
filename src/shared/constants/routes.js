import { FeedPage } from "../../pages/feed/feed.js"
import { LoginPage } from "../../pages/login/login.js";
import { RegistrationPage } from "../../pages/signup/signup.js";
import { MatchesPage } from "../../pages/matches/matches.js";
import { ProfilePage } from "../../pages/profile/profile.ts";

export const ROUTES_NAME = {
    LOGIN: 'login',
    FEED: 'feed',
    MATCHES: 'matches',
    SIGNUP: 'signup',
};

export const ROUTES = new Map([
    [ROUTES_NAME.LOGIN, { path: '/login', view: LoginPage }],
    [ROUTES_NAME.FEED, { path: '/feed', view: FeedPage }],
    [ROUTES_NAME.MATCHES, { path: '/matches', view: MatchesPage }],
    [ROUTES_NAME.SIGNUP, { path: '/signup', view: RegistrationPage }],
    [ROUTES_NAME.SIGNUP, { path: '/profile', view: ProfilePage }],
]);