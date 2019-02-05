import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = (theme) => {
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  return {
    Root: {
      zIndex: '1',
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '200px',
      cursor: 'pointer',
      color: 'white',
      borderRadius: '5px',
      boxShadow: `0 0 2px black`,
      '&:hover': {
        // boxShadow: `0 0 10px black`,
        // filter: 'brightness(0.9)',
      },
    },

    TeaBackgroundImage: {
      position: 'absolute',
      zIndex: '1',

      width: '100%',
      height: '100%',

      borderRadius: '5px',
      backgroundColor: fade(secondaryColor, 1),
      backgroundSize: 'cover',
    },

    CardContent: {
      zIndex: '2',

      display: 'grid',

      width: '100%',
      height: '100%',

      borderRadius: '5px',

      gridTemplateColumns: '86% 14%',
      gridTemplateAreas: `
        'MainInfo MenuWrapper' 
        'AdditionalInfo AdditionalInfo'
      `,
      gridTemplateRows: '80% 20%',
    },

    MainInfo: {
      marginLeft: '10px',
      gridArea: 'MainInfo',
      paddingTop: '40px',
    },

    // NamesWrapper: {
    //   // width: 'max-content',
    //   // height: 'max-content',
    //   display: 'grid',
    //   gridTemplateColumns: '100% 100%',
    //   // marginTop: '45px',
    //   textShadow: '2px 2px 4px black',
    // },

    Names: {
      zIndex: '2',
      display: 'grid',
      gridTemplateAreas: `
        'FirstName NamesBackground'
        'SecondName NamesBackground'
      `,
      gridTemplateRows: 'min-content min-content',
      gridTemplateColumns: '1fr 1fr',
      fontWeight: '400',
      width: 'max-content',
      textShadow: '2px 2px 4px black',
    },

    NamesBackground: {
      zIndex: '1',
      width: '108%',
      height: '100%',
      background: 'black',
      opacity: '0.2',
      filter: 'blur(5px)',
      gridArea: 'NamesBackground',
      marginLeft: '-104%',
    },

    Firstname: {
      zIndex: '2',
      margin: '0px',
      fontWeight: '400',
      fontSize: '1.5rem',
      gridArea: 'FirstName',
    },

    SecondName: {
      zIndex: '2',
      marginTop: '5px',
      marginBottom: 0,
      fontWeight: '400',
      fontSize: '1.2rem',
      gridArea: 'SecondName',
    },

    AdditionalInfo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      borderBottomRightRadius: '5px',
      borderBottomLeftRadius: '5px',
      backgroundColor: fade(primaryColor, 0.7),
      gridArea: 'AdditionalInfo',
    },

    Badge: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',

      height: '25px',

      textAlign: 'center',

      color: 'white',
      borderRadius: '50%',

      '& + &': {
        marginLeft: '20px',
      },

      '& img': {
        position: 'relative',
        top: '-2px',

        width: '22px',
        height: '22px',
        marginLeft: '5px',
      },
    },

    MenuWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',

      backgroundColor: 'transparent',

      gridArea: 'MenuWrapper',
    },

    MenuWrapper_isMenuShown: {
      // background-color:  rgba($color: white, $alpha: 0.7);
    },

    ToggleMenuButton: {
      zIndex: '4',
      display: 'flex',
      justifyContent: 'flex-end',

      width: 'fit-content',
      marginTop: '4px',
      padding: '5px 5px',

      borderTopRightRadius: '5px',
      outline: 'none',

      '&:hover': {
        transform: 'scale(1.1)',
      },
    },

    Dot: {
      width: '5px',
      height: '5px',
      margin: '2px',

      transition: 'transform 0.5s, background-color 0.05s',

      borderRadius: '50%',
      backgroundColor: 'white',
    },
    Dot_inOpenMenu: {},
    Dot_inCloseMenu: {
      width: '2.5px',
      height: '22px',
      margin: '2px',

      borderRadius: '50%',

      '&:nth-child(1n)': {
        transform: 'rotate(45deg) translate(2px, -7px)',
      },
      '&:nth-child(2n)': {
        backgroundColor: 'transparent',
      },
      '&:nth-child(3n)': {
        transform: 'rotate(-45deg) translate(-2px, -7px)',
      },
    },

    ToggleMenuButton_isMenuShown: {
      height: '28px',

      '&:hover': {
        filter: 'brightness(0.6)',
      },
    },

    Menu: {
      zIndex: '3',
      position: 'absolute',
      top: '0',
      left: '0',

      width: '100%',
      height: '100%',

      backgroundColor: 'rgba(0,0,0,0.5)',

      '& ul': {
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',

        width: '100%',
        height: '100%',
      },
      '& ul li': {
        padding: '5px 0px',

        '&:hover': {
          filter: 'brightness(0.6)',
        },
      },
    },
    MenuAddIcon: {
      fontSize: '55px',
    },
    MenuShareIcon: {
      fontSize: '46px',
    },
  };
};

export default styles;
