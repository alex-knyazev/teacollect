import React from 'react';

import Page from '@/components/common/Page';
import Collections from '@/components/Collections';
import DefaultLayout from '@/base/Layouts/Default';

const MainPage = () => (
  <DefaultLayout>
    <Page title="Collections">
      <Collections />
    </Page>
  </DefaultLayout>
);

export default MainPage;
