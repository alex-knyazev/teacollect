import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import HeaderContent from '@/containers/HeaderContent';

import styles from './index.module.scss';

const Layout = props => {
  const {
    children,
    location: { pathname },
  } = props;

  const isShowHeader = pathname !== '/login' && pathname !== '/registration';
  return (
    <div className={styles.layout}>
      {isShowHeader && (
        <header className={styles.header}>
          <HeaderContent />
        </header>
      )}
      <div className={styles.main}>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Layout.defaultProps = {
  children: '',
};

export default withRouter(Layout);
