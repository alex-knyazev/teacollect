/**
 * HOC _app to provide apollo and redux to app
 */
import 'isomorphic-fetch';
import React from 'react';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';
import cookies from 'next-cookies';
import initApolloClient from '@/base/apolloClient/init';
import initReduxStore from '@/strore/init';
import accessTokenUtils from '@/utils/accessToken';

export default (App) => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)';

    static async getInitialProps(args) {
      const { Component, router, ctx } = args;
      let appProps = {};

      const reduxStore = initReduxStore();
      ctx.reduxStore = reduxStore;

      const headers = ctx.req ? ctx.req.headers : {};
      const token = cookies(ctx)[accessTokenUtils.ACCESS_TOKEN_KEY];

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(args);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApolloClient(headers || {}, token || '', {});
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
              reduxStore={reduxStore}
            />,
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          // console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();
      return {
        ...appProps,
        apolloState,
        reduxStore,
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = initApolloClient(props.apolloState);
      this.reduxStore = initReduxStore();
    }

    render() {
      return (
        <App
          {...this.props}
          reduxStore={this.reduxStore}
          apolloClient={this.apolloClient}
        />
      );
    }
  };
};
