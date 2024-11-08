import { FeedPage } from '../../pages/feed/feed.js';
import { LoginPage } from '../../pages/login/login.js';
import { RegistrationPage } from '../../pages/signup/signup.js';
import { MatchesPage } from '../../pages/matches/matches.js';
import { ProfilePage } from '../../pages/profile/profile.ts';

export const ROUTES_NAME = {
	LOGIN: 'login',
	FEED: 'feed',
	MATCHES: 'matches',
	SIGNUP: 'signup',
	PROFILE: 'profile',
};

export const ROUTES = new Map([
	[ROUTES_NAME.LOGIN, { path: '/login', view: LoginPage, isPublic: true }],
	[ROUTES_NAME.FEED, { path: '/feed', view: FeedPage, isPublic: false }],
	[ROUTES_NAME.MATCHES, { path: '/matches', view: MatchesPage, isPublic: false }],
	[ROUTES_NAME.SIGNUP, { path: '/signup', view: RegistrationPage, isPublic: true }],
	[ROUTES_NAME.PROFILE, { path: '/profile', view: ProfilePage, isPublic: false }],
]);