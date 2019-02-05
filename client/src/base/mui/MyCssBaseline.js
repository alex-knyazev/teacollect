/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { exactProp } from '@material-ui/utils';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  '@global': {
    ul: {
      padding: 0,
    },
    li: {
      listStyleType: 'none',
    },
  },
});

/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */
class CssBaseline extends React.Component {
  render() {
    return this.props.children;
  }
}

CssBaseline.defaultProps = {
  children: null,
};

export default withStyles(styles, { name: 'MyCssBaseline' })(CssBaseline);
