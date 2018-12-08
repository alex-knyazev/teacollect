import React from 'react';

import Page from '@/components/common/Page';
import CenterContentLayout from '@/base/Layouts/CenterContent';
import RegistrationCont from '@/containers/Registration';

const MainPage = () => (
  <CenterContentLayout>
    <Page title="Registration">
      <RegistrationCont />
    </Page>
  </CenterContentLayout>
);

export default MainPage;
