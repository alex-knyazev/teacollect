import { setContext } from 'apollo-link-context';

import { LOGIN_MODULE, ACCESS_TOKEN_GETTER } from '~/store/login';

class AuthLink {
  constructor(store) {
    this.store = store;
  }

  create() {
    const link = setContext(async (query, { headers }) => {
      let queryParams = {
        headers: {
          ...headers,
          authorization: null,
        },
        method: 'post',
      };

      const accessToken = this.store.getters[`${LOGIN_MODULE}/${ACCESS_TOKEN_GETTER}`];
      if (!accessToken) {
        return queryParams;
      }
      queryParams.headers.authorization = `Bearer ${accessToken}`;

      return queryParams;
    });

    return link;
  }
}

export default AuthLink;
