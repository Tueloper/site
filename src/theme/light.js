// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = {
    palette: {
        // type: 'light',
        background: {
            default: "#eee"
        },
        text: {
            primary: '#312D2C',
            secondary: '#5A5655',
            white: '#ffffff',
            error: '#B11F24',
        },
        error: {
            main: '#B11F24',
        },
        success: {
            main: "#009B48",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        background: {
            paper: "#272c34"
        }
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
};

// theme = responsiveFontSizes(theme);

export default theme;