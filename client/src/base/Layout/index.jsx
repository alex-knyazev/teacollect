import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import HeaderContent from '@/containers/HeaderContent';

import styles from './index.module.scss';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#00922e' }, // Purple and green play nicely together.
    secondary: { main: '#47371e' }, // This is just green.A700 as hex.
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Philosopher', 'serif'].join(','),
  },
});

const Layout = props => {
  const {
    children,
    location: { pathname },
  } = props;

  const isShowHeader = pathname !== '/login';
  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.layout}>
        {isShowHeader && (
          <header className={styles.header}>
            <HeaderContent />
          </header>
        )}
        <div className={styles.main}>{children}</div>
      </div>
    </MuiThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Layout.defaultProps = {
  children: '',
};

export default withRouter(Layout);
