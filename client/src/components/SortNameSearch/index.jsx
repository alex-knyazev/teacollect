import React from 'react';

import SearchForm from '@/components/common/SearchForm';

import styles from './index.scss';

const SortNameSearch = () => (
  <SearchForm
    searchFormClassName={styles.searchForm}
    searchFormInputClassName={styles.searchFormInput}
  />
);

export default SortNameSearch;
