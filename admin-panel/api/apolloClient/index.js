import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

// import AuthLink from './AuthLink';
// import RefreshLink from './RefreshLink';
// import LoggerLink from './LoggerLink';

export default context => {
  // const loggerLink = process.env.NODE_ENV !== 'production' ? [new ApolloLogger()] : [];
  const { store, redirect } = context;
  // const authLink = new AuthLink(store).create();
  /*const refreshLink = new RefreshLink(store, redirect).create();*/
  const uploadLink = createUploadLink({ uri: process.env.API_LINK });

  const link = ApolloLink.from([/*refreshLink,*/ /*authLink,*/ uploadLink]);
  return {
    link: link,
    cache: new InMemoryCache({
      addTypename: false,
    }),
    ssrMode: true,
  };
};
