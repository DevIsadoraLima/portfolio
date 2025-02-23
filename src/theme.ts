import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#75eeb2',
    },
    secondary: {
      main: '#e683d9',
    },
  },
  typography: {
    fontFamily: "Segoe UI",
  }
});

theme = responsiveFontSizes(theme);

export default theme;