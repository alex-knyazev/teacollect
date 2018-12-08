import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#5ea538' }, // Purple and green play nicely together.
    secondary: { main: '#47371e' }, // This is just green.A700 as hex.
    mainWhite: { main: '#9ef442' },
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Philosopher', 'serif'].join(','),
  },
});

export default theme;
