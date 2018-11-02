import React from 'react';
import PropTypes from 'prop-types';

import HeaderContent from '@/components/HeaderContent';

import styles from './index.module.scss';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <HeaderContent />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Layout.defaultProps = {
  children: '',
};

export default Layout;
