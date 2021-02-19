import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  greys: {
    dark: '#7e7e7e',
    mid: '#9b9b9b',
    light: '#e8e8e8',
  },
  notification: {
    high: '#9387a4',
    medium: '#ffa85a',
    success: '#3edb35',
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
  
  palette: {
    text: {
        primary: "#000",
        dark: '#FFFFFF',
        secondary: 'rgba(255, 255, 255, 1)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
    },
    status: {
      danger: '#e53e3e',
      success: '#3edb35',
      error: '#9387a4',
      warning: '#ffa85a',
      info: '#1976d2'
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#e31c79',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      lightGrey: '#f2f2f4',
      greyBlue: '#636e8b',
      greyBlue2: '#363e53',
      blueBlack: '#21222e',
      contrastText: '#fff'
    },
    secondary: {
      main: '#9387a4',
      // dark: will be calculated from palette.secondary.main,
      purple: '#5a00be',
      hoverBlue: '#f5faff',
      hoverPink: '#ed1d7c',
      highlighBlue: '#dcfffe',
      contrastText: '#ffcc00',
    }, 
    warning: {
      main: 'rgb(32, 223, 56)',
      // dark: will be calculated from palette.secondary.main,
      purple: 'rgb(32, 223, 56)',
      hoverBlue: 'rgb(32, 223, 56)',
      hoverPink: 'rgb(32, 223, 56)',
      highlighBlue: 'rgb(32, 223, 56)',
      contrastText: 'rgb(32, 223, 56)',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    }
  },
});

export default theme;