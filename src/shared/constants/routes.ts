import { FeedPage } from '../../pages/feed/index';
import { LoginPage } from '../../pages/login/index';
import { RegistrationPage } from '../../pages/signup/index';
import { MatchesPage } from '../../pages/matches/index';
import { ProfilePage } from '../../pages/profile/index';
import { StatisticsPage } from '../../pages/statistics/index';
import { SurveyPage } from '../../pages/survey/index';
//import  CsatPage  from '../../widgets/Csat/Csat';

export const ROUTES_NAME = {
	LOGIN: 'login',
	FEED: 'feed',
	MATCHES: 'matches',
	SIGNUP: 'signup',
	PROFILE: 'profile',
	STATISTICS: 'statistics',
	SURVEY: 'survey',
	//CSAT: 'csat',
};

export const ROUTES = new Map([
	[ROUTES_NAME.LOGIN, { path: '/login', view: LoginPage, isPublic: true }],
	[ROUTES_NAME.FEED, { path: '/feed', view: FeedPage, isPublic: false }],
	[ROUTES_NAME.MATCHES, { path: '/matches', view: MatchesPage, isPublic: false }],
	[ROUTES_NAME.SIGNUP, { path: '/signup', view: RegistrationPage, isPublic: true }],
	[ROUTES_NAME.PROFILE, { path: '/profile', view: ProfilePage, isPublic: false }],
	[ROUTES_NAME.STATISTICS, { path: '/statistics', view: StatisticsPage, isPublic: false }],
	[ROUTES_NAME.SURVEY, { path: '/csatsurvey', view: SurveyPage, isPublic: false }],
	//[ROUTES_NAME.CSAT, { path: '/csatsurvey', view: CsatPage, isPublic: false }],
]);