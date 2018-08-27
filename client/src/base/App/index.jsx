import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '@/store';
import routes from '@/constants/routes';

import CollectionsPage from '@/pages/CollectionsPage';
import Layout from '../Layout';

const App = () => (
  <Provider store={configureStore()}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path={routes.COLLECTIONS_PAGE} component={CollectionsPage} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
