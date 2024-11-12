import { FeedPage } from '../../pages/feed/feed';
import { LoginPage } from '../../pages/login/login';
import { RegistrationPage } from '../../pages/signup/signup';
import { MatchesPage } from '../../pages/matches/matches';
import { ProfilePage } from '../../pages/profile/profile';

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