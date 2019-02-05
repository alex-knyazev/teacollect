import React from 'react';
import AppLayout from '@/components/AppLayout';
import Link from 'next/link';
import Router from 'next/router';

class Index extends React.Component {
  static async getInitialProps(ctx) {
    const DEFAULT_ROUTER = '/collections?name=all';
    if (ctx.res) {
      ctx.res.writeHead(303, { Location: DEFAULT_ROUTER });
      ctx.res.end();
    } else {
      // In the browser, we just pretend like this never even happened ;)
      Router.replace(DEFAULT_ROUTER);
    }
  }

  render() {
    return 'redirect to default route';
  }
}

export default Index;
