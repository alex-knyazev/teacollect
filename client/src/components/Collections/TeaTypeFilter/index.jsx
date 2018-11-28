import React from 'react';

import Select from '@/components/common/Select';

import styles from './index.scss';

const TeaTypeFilter = (props) => {
  const {
    handleFilter,
    teaTypes: { types, currentTeaTypes },
  } = props;

  const options = types.map((type) => ({ value: type.name, label: type.name }));
  const selectedOptions = options.filter((option) => currentTeaTypes.includes(option.value));

  return (
    <div className={styles.teaTypeFilter}>
      <Select
        defaultValue={selectedOptions}
        handleFilter={handleFilter}
        options={options}
        isMulti
      />
    </div>
  );
};

export default TeaTypeFilter;
