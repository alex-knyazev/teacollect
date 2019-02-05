const styles = (theme) => {
  const secondaryColor = theme.palette.secondary.main;
  const hoverColor = theme.palette.action.hover;
  return {
    Root: {
      position: 'absolute',
      width: 'auto',
      padding: 10,
    },
    FilterMenuSections: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, auto)',
    },
    AcceptWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    Section: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      height: 'inherit',
      padding: '8px 16px 0px 16px',
    },
    SectionDivider: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
    },
    SectionDividerLine: {
      width: 3,
      height: '60%',
      background: secondaryColor,
      borderRadius: '3px',
    },
    SectionTitle: {
      color: secondaryColor,
      fontWeight: 600,
    },
    SectionList: {
      height: 'inherit',
      marginBottom: 0,
      maxHeight: '45vh',
      overflowY: 'auto',
      width: 'max-content',
    },
    AcceptButton: {
      textTransform: 'capitalize',
    },
  };
};

export default styles;
