import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

import {
  LOGIN_MODULE,
  ACCESS_TOKEN_GETTER,
  REFRESH_TOKEN_GETTER,
  SET_ACCESS_DATA_MUTATION,
} from '~/store/login';

import { NOTIFICATION_MODULE, INIT_NOTIFICATION_ACTION } from '~/store/notification';

const TIME_BEFORE_LOGOUT = 1500;

import { refreshToken } from '../refreshToken';
class MyTokenRefreshLink {
  constructor(store, redirect) {
    this.store = store;
    this.redirect = redirect;
  }

  create() {
    const store = this.store;
    const redirect = this.redirect;

    const link = new TokenRefreshLink({
      accessTokenField: 'accessData',
      isTokenValidOrUndefined: () => {
        const accessToken = store.getters[`${LOGIN_MODULE}/${ACCESS_TOKEN_GETTER}`];
        if (accessToken) {
          const decoded = jwt.decode(accessToken, { complete: true });
          const isExpired = new Date(decoded.payload.exp * 1000).getTime() < new Date().getTime();
          return !isExpired;
        }
        return true;
      },
      fetchAccessToken: () => {
        const currentRefreshToken = store.getters[`${LOGIN_MODULE}/${REFRESH_TOKEN_GETTER}`];
        return refreshToken(currentRefreshToken);
      },
      handleFetch: accessData => {
        Cookies.set('accessData', accessData, { expires: 30 });
        store.commit(`${LOGIN_MODULE}/${SET_ACCESS_DATA_MUTATION}`, { accessData });
      },
      handleResponse: () => response => {
        return {
          accessData: response.data.refreshToken,
        };
      },
      handleError: err => {
        store.dispatch(`${NOTIFICATION_MODULE}/${INIT_NOTIFICATION_ACTION}`, {
          message: err.message,
          mode: 'error',
        });
        setTimeout(() => {
          redirect('/logout');
        }, TIME_BEFORE_LOGOUT);
      },
    });

    return link;
  }
}

export default MyTokenRefreshLink;
