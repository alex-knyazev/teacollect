const customStyles = {
  option: (base) => ({
    ...base,
  }),
  control: (base, state) => {
    const { isFocused } = state;
    return {
      display: 'flex',
      position: 'relative',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      minHeight: 38,
      outline: '0 !important',
      transition: 'all 100ms',
      border: '1px solid #3fa43a',
      boxShadow: isFocused ? '0 0 1px 0.5px #3fa43a' : null,
      borderRadius: 2,
    };
  },
  valueContainer: (base) => ({
    ...base,
    paddingRight: '40px',
  }),
  menu: (base) => ({
    ...base,
  }),
  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...base, opacity, transition };
  },
  multiValue: (base) => ({
    ...base,
    backgroundColor: 'rgba(100, 149, 247, 0.15)',
  }),
  multiValueLabel: (base) => ({
    ...base,
    fontSize: '15px',
  }),
  multiValueRemove: (base) => ({
    ...base,
    ':hover': {
      color: '#3fa43a',
    },
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '15px',
  }),
};

export default customStyles;
