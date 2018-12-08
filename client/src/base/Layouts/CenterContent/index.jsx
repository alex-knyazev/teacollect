import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const Layout = props => {
  const { children } = props;

  return (
    <div className={styles.layout}>
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

export default Layout;
