import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import configureStore from '@/store';
import routes from '@/constants/routes';

import CollectionsPage from '@/pages/CollectionsPage';
import Layout from '../Layout';

import writeInUserSession from '@/utils/writeInUserSession'

const handleRouteChange = (data) => {
  writeInUserSession(data);
}

const client = new ApolloClient({
  uri: 'http://localhost:3003/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
      <Router onChange={handleRouteChange}>
        <Layout>
          <Switch>
            <Route exact path={routes.COLLECTIONS_PAGE} component={CollectionsPage} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
