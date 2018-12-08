import React from 'react';
import {
  Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from '@material-ui/core/styles';

import configureStore from '@/store';
import { routesArray, routesVocabulary } from '@/pages';

import history from './history';
import muiTheme from './muiTheme';
import apolloClient from './apolloClient';

const Routes = routesArray.map(route => (
  <Route key={route.name} path={route.name} component={route.page} />
));

const loggedIn = true;
const App = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={configureStore()}>
      <Router history={history}>
        <MuiThemeProvider theme={muiTheme}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (loggedIn ? (
                <Redirect to={routesVocabulary.COLLECTIONS_WORLD_PAGE.name} />
              ) : (
                <Redirect to={routesVocabulary.LOGIN_PAGE.name} />
              ))
              }
            />
            {Routes}
            <Redirect from="*" to="/404" />
          </Switch>
        </MuiThemeProvider>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
