import React from 'react';

import Page from '@/components/common/Page';
import DefaultLayout from '@/base/Layouts/Default';

// import Collections from '@/components/Collections';

const MainPage = () => (
  <DefaultLayout>
    <Page title="Tea">
      <div>Tea</div>
      {/* <Collections /> */}
    </Page>
  </DefaultLayout>
);

export default MainPage;
