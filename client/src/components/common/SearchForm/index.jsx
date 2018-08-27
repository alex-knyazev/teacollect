import React from 'react';
import cn from 'classnames';

import styles from './index.scss';

const SearchForm = (props) => {
  const { searchFormClassName, searchFormInputClassName } = props;

  const searchFormCn = cn({
    [styles.searchForm]: true,
    [searchFormClassName]: searchFormClassName,
  });

  return (
    <div className={searchFormCn}>
      <input className={searchFormInputClassName} placeholder="" />
    </div>
  );
};
export default SearchForm;
