class NavLink {
  constructor(to, text, query) {
    this.text = text;
    this.to = to;
    this.pathname = `/${to}`;
    this.query = query;
  }
}

const COLLECTIONS = new NavLink('collections', 'Коллекции', { name: 'all' });
const ARTICLES = new NavLink('articles', 'Статьи');
const CLUBS = new NavLink('clubs', 'Чайные клубы');
const STATISTICS = new NavLink('statistics', 'Статистика');
const SETTINGS = new NavLink('settings', 'Настройки');
const SIGN_IN = new NavLink('signin', 'Выйти');
export const DEFAULT = COLLECTIONS;

export const ALL_NAV_LINKS = [
  COLLECTIONS,
  ARTICLES,
  CLUBS,
  STATISTICS,
  SETTINGS,
  SIGN_IN,
  DEFAULT,
];

export const MAIN_LINKS = [COLLECTIONS, ARTICLES, CLUBS];

export const PROFILE_NAV_LINKS = [STATISTICS, SETTINGS, SIGN_IN];
