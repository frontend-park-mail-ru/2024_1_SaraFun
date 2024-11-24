import { FeedPage } from '../../pages/feed/index';
import { LoginPage } from '../../pages/login/index';
import { RegistrationPage } from '../../pages/signup/index';
import { MatchesPage } from '../../pages/matches/index';
import { ProfilePage } from '../../pages/profile/index';
import { ChatsPage } from '../../pages/chats/index';

export const ROUTES_NAME = {
	LOGIN: 'login',
	CHATS: 'chats',
	FEED: 'feed',
	MATCHES: 'matches',
	SIGNUP: 'signup',
	PROFILE: 'profile',
};

export const ROUTES = new Map([
	[ROUTES_NAME.LOGIN, { path: '/login', view: LoginPage, isPublic: true }],
	[ROUTES_NAME.FEED, { path: '/feed', view: FeedPage, isPublic: false }],
	[ROUTES_NAME.MATCHES, { path: '/matches', view: MatchesPage, isPublic: false }],
	[ROUTES_NAME.CHATS, { path: '/chats', view: ChatsPage, isPublic: false }],
	[ROUTES_NAME.CHATS, { path: '/chats/:chat', view: ChatsPage, isPublic: false }],
	[ROUTES_NAME.SIGNUP, { path: '/signup', view: RegistrationPage, isPublic: true }],
	[ROUTES_NAME.PROFILE, { path: '/profile', view: ProfilePage, isPublic: false }],
]);