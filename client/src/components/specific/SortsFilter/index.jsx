import React from 'react';

import TeaTypeFilter from '@/components/specific/TeaTypeFilter';
import SortNameSearch from '@/components/specific/SortNameSearch';

import styles from './index.module.scss';

const SortsFilter = (props) => {
  const { filterSortsAC, currentCollectionType, teaTypes } = props;
  return (
    <div className={styles.sortsFilter}>
      <TeaTypeFilter
        handleFilter={(selectedOptions) => {
          filterSortsAC({ currentTeaTypes: selectedOptions.map((option) => option.value) });
        }}
        currentCollectionType={currentCollectionType}
        teaTypes={teaTypes}
      />
      <SortNameSearch
        handleSearch={(searchedValue) => {
          filterSortsAC({ sortName: searchedValue });
        }}
      />
    </div>
  );
};

export default SortsFilter;
