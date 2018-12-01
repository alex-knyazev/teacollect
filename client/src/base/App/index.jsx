import React from 'react';
import {
   Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import store from 'store';

import configureStore from '@/store';
import { routesArray, routesVocabulary } from '@/pages';

import Layout from '../Layout';

const client = new ApolloClient({
  uri: 'http://localhost:3003/graphql',
});

const Routes = routesArray.map(route => (
  <Route key={route.name} path={route.name} component={route.page} />
));

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

history.listen(location => {
  const { pathname } = location;

  let session = store.get('session');
  const date = new Date().toISOString();
  const newRoute = {
    name: pathname,
    visitAt: date,
  }
  if(!session || ! session.length) {
    store.set('session', [
      newRoute,
    ]);
  } else {
    store.set('session',  [...session, newRoute]);
  }
});

const sendToServerSessionData = (session) => {
  if(!session) return;
  const body = { user: { id: "5c02be8455038828b9d1225f", email: "alex@gmail.com" }, session };
  fetch('http://localhost:3004/saveSessionsData', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization: '5c02be8455038828b9d1225f'
      },
      method: "POST",
      body: JSON.stringify(body)
    })
    .then(function(response) {
      return response.json();
    }).then(function(myBlob) {
      console.log(123)
    });
}


setTimeout(() => {
  sendToServerSessionData(store.get('session'));
  store.remove('session');
}, 1000);

const loggedIn = true;

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (loggedIn ? (
                <Redirect to={routesVocabulary.COLLECTIONS_WORLD_PAGE.name}/>
              ) : (
                <Redirect to={routesVocabulary.LOGIN_PAGE.name} />
              ))
              }
            />
            {Routes}
            <Redirect from="*" to="/404" />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
