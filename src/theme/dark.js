import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let themeDark = createMuiTheme({
  palette: {
    // type: "dark",
    background: {
      default: "#0D1117"
    },
    text: {
      primary: "#ffffff"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
        'Gothic A1',
        'Lato',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    h1: {
        fontWeight: 700,
        fontFamily: 'Gothic A1',
    },
    h2: {
        fontWeight: 700,
        fontFamily: 'Gothic A1',
    },
    h3: {
        fontWeight: 700,
        fontFamily: 'Gothic A1',
    }
},  
  spacing: unit => unit * 8,
  breakpoints: {
      values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
      },
  }
});

themeDark = responsiveFontSizes(themeDark);

export default themeDark;