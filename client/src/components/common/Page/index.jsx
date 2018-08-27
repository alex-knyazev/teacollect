import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

/**
 * Page-component
 * Sets page-title in head, caption for page and render childrens
 */
const Page = (props) => {
  const { title, headerTags, children } = props;
  return (
    <Fragment>
      <Helmet>
        {headerTags}
        <title>{title}</title>
      </Helmet>
      {children}
    </Fragment>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  headerTags: PropTypes.arrayOf(PropTypes.element),
};

Page.defaultProps = {
  title: '',
  children: '',
  headerTags: [],
};

export default Page;
