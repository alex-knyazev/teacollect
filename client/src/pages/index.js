import CollectionsPage from './Collections';
import TeaPage from './Tea';
import ArticlesPage from './Articles';
import GroupsPage from './Groups';
import TeaMapPage from './TeaMap';
import SettingsPage from './Settings';
import LoginPage from './Login';
import StatisticsPage from './Statistics';

const COLLECTIONS_MY_WANT_PAGE = {
  name: '/collections/my/want',
  page: CollectionsPage,
};
const COLLECTIONS_MY_TRIED_PAGE = {
  name: '/collections/my/tried',
  page: CollectionsPage,
};
const COLLECTIONS_WORLD_PAGE = {
  name: '/collections/world',
  page: CollectionsPage,
};
const TEA_PAGE = {
  name: '/tea',
  page: TeaPage,
};
const ARTICLES_ALL_PAGE = {
  name: '/articles/all',
  page: ArticlesPage,
};
const ARTICLES_FAVORITE_PAGE = {
  name: '/articles/favorite',
  page: ArticlesPage,
};
const GROUPS_ALL_PAGE = {
  name: '/groups/all',
  page: GroupsPage,
};
const GROUPS_MY_PAGE = {
  name: '/groups/my',
  page: GroupsPage,
};
const TEA_MAP_CHINA_PAGE = {
  name: '/teaMap/china',
  page: TeaMapPage,
};
const TEA_MAP_AFRICA_PAGE = {
  name: '/teaMap/africa',
  page: TeaMapPage,
};
const TEA_MAP_INDIA_PAGE = {
  name: '/teaMap/india',
  page: TeaMapPage,
};
const SETTINGS_PAGE = {
  name: '/settings',
  page: SettingsPage,
};
const STATISTICS_PAGE = {
  name: '/statistics',
  page: StatisticsPage,
};

const LOGIN_PAGE = {
  name: '/login',
  page: LoginPage,
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
};
