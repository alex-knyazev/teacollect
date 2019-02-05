const styles = (theme) => {
  return {
    ChosenItemChipWrapper: {
      margin: '0 2px',
      position: 'relative',
      cursor: 'pointer',

      '&:hover': {
        transform: 'rotate(-1.4deg) scale(1.01)',
      },
    },
    ChosenItemChip: {
      height: 26,
      cursor: 'pointer',
    },
    ClearIcon: {
      position: 'absolute',
      top: '-10px',
      right: '0px',
      width: 12,
    },
  };
};

export default styles;
