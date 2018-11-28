import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import configureStore from '@/store';
import routes from '@/constants/routes';

import CollectionsPage from '@/pages/Collections';
import LoginPage from '@/pages/Login';

import Layout from '../Layout';

const client = new ApolloClient({
  uri: 'http://localhost:3003/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path={routes.INDEX} component={CollectionsPage} />
            <Route exact path={routes.COLLECTIONS_PAGE} component={CollectionsPage} />
            <Route exact path={routes.LOGIN_PAGE} component={LoginPage} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
