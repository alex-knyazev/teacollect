import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import configureStore from '@/store';
import { routesArray, routesVocabulary } from '@/pages';

import Layout from '../Layout';

const client = new ApolloClient({
  uri: 'http://localhost:3003/graphql',
});

const Routes = routesArray.map(route => <Route exact path={route.name} component={route.page} />);
const App = () => (
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
      <Router>
        <Layout>
          <Switch>
            {Routes}
            <Redirect from="/" to="/123" />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
