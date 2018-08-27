import React from 'react';
import ReactSelect from 'react-select';

import styles from './index.scss';
import customStyles from './customStyles';

const MultiSelectFilter = (props) => {
  const {
    defaultValue, handleFilter, options, isMulti,
  } = props;
  return (
    <ReactSelect
      value={defaultValue}
      onChange={handleFilter}
      options={options}
      isMulti={isMulti}
      className={styles.multiselect}
      styles={customStyles}
      placeholder="Тип чая..."
    />
  );
};

export default MultiSelectFilter;
