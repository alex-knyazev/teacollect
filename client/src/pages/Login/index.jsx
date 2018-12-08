import React from 'react';

import Page from '@/components/common/Page';
import Login from '@/containers/Login';
import CenterContentLayout from '@/base/Layouts/CenterContent';

const LoginPage = () => (
  <CenterContentLayout>
    <Page title="Login">
      <Login />
    </Page>
  </CenterContentLayout>
);

export default LoginPage;
