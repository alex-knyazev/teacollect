import CollectionsPage from './Collections';
import TeaPage from './Tea';
import ArticlesPage from './Articles';
import GroupsPage from './Groups';
import TeaMapPage from './TeaMap';
import SettingsPage from './Settings';
import LoginPage from './Login';
import StatisticsPage from './Statistics';
import NotFoundPage from './NotFound';
import RegistrationPage from './Registration';

export const COLLECTIONS_MY_WANT_PAGE = {
  name: '/collections/my/want',
  page: CollectionsPage,
};
export const COLLECTIONS_MY_TRIED_PAGE = {
  name: '/collections/my/tried',
  page: CollectionsPage,
};
export const COLLECTIONS_WORLD_PAGE = {
  name: '/collections/world',
  page: CollectionsPage,
};
export const TEA_PAGE = {
  name: '/tea',
  page: TeaPage,
};
export const ARTICLES_ALL_PAGE = {
  name: '/articles/all',
  page: ArticlesPage,
};
export const ARTICLES_FAVORITE_PAGE = {
  name: '/articles/favorite',
  page: ArticlesPage,
};
export const GROUPS_ALL_PAGE = {
  name: '/groups/all',
  page: GroupsPage,
};
export const GROUPS_MY_PAGE = {
  name: '/groups/my',
  page: GroupsPage,
};
export const TEA_MAP_CHINA_PAGE = {
  name: '/teaMap/china',
  page: TeaMapPage,
};
export const TEA_MAP_AFRICA_PAGE = {
  name: '/teaMap/africa',
  page: TeaMapPage,
};
export const TEA_MAP_INDIA_PAGE = {
  name: '/teaMap/india',
  page: TeaMapPage,
};
export const SETTINGS_PAGE = {
  name: '/settings',
  page: SettingsPage,
};
export const STATISTICS_PAGE = {
  name: '/statistics',
  page: StatisticsPage,
};

export const LOGIN_PAGE = {
  name: '/login',
  page: LoginPage,
};
export const REGISTRATION_PAGE = {
  name: '/registration',
  page: RegistrationPage,
};

export const NOT_FOUND_PAGE = {
  name: '/404',
  page: NotFoundPage,
};

export const routesArray = [
  LOGIN_PAGE,
  COLLECTIONS_MY_WANT_PAGE,
  COLLECTIONS_MY_TRIED_PAGE,
  COLLECTIONS_WORLD_PAGE,
  TEA_PAGE,
  ARTICLES_ALL_PAGE,
  ARTICLES_FAVORITE_PAGE,
  GROUPS_ALL_PAGE,
  GROUPS_MY_PAGE,
  TEA_MAP_CHINA_PAGE,
  TEA_MAP_AFRICA_PAGE,
  TEA_MAP_INDIA_PAGE,
  SETTINGS_PAGE,
  STATISTICS_PAGE,
  REGISTRATION_PAGE,
  NOT_FOUND_PAGE,
];

export const routesVocabulary = {
  LOGIN_PAGE,
  COLLECTIONS_MY_WANT_PAGE,
  COLLECTIONS_MY_TRIED_PAGE,
  COLLECTIONS_WORLD_PAGE,
  TEA_PAGE,
  ARTICLES_ALL_PAGE,
  ARTICLES_FAVORITE_PAGE,
  GROUPS_ALL_PAGE,
  GROUPS_MY_PAGE,
  TEA_MAP_CHINA_PAGE,
  TEA_MAP_AFRICA_PAGE,
  TEA_MAP_INDIA_PAGE,
  SETTINGS_PAGE,
  STATISTICS_PAGE,
  REGISTRATION_PAGE,
  NOT_FOUND_PAGE,
};
