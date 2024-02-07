import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define a light color palette
const lightPalette = {
  primary: {
    main: '#222422',
    black: {
      100: "#d3d3d3",
      200: "#a7a7a7",
      300: "#7a7c7a",
      400: "#4e504e",
      500: "#222422",
      600: "#1b1d1b",
      700: "#141614",
      800: "#0e0e0e",
      900: "#070707"
  }, 
  },
  secondary: {
    main: '#dc004e',
    white: {
      100: "#fefefe",
      200: "#fdfefe",
      300: "#fcfdfd",
      400: "#fbfdfd",
      500: "#fafcfc",
      600: "#c8caca",
      700: "#969797",
      800: "#646565",
      900: "#323232"
}, 
  },
  error: {
    main: '#f44336',
  },
  warning: {
    main: '#ff9800',
  },
  info: {
    main: '#2196f3',
  },
  success: {
    main: '#4caf50',
  },
  background: {
    default: '#ffffff',
    paper: '#f5f5f5',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
  },
};

let theme = createTheme({
  palette: lightPalette,
  typography: { 
    fontFamily: 'Georgia', 
    h1: {
      fontSize: '2rem', 
      '@media (max-width:600px)': {
        fontSize: '1.2rem', 
      },
    },
    h2: {
      fontSize: '1.7rem',
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
    h3: {
      fontSize: '1.4rem',
      '@media (max-width:600px)': {
        fontSize: '0.6rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.4rem',
      },
    },
    body2: {
      fontSize: '0.9rem',
      '@media (max-width:600px)': {
        fontSize: '0.3rem',
      },
    },
    body3: {
      fontSize: '0.8rem',
      '@media (max-width:600px)': {
        fontSize: '0.2rem',
      },
    },
    text: {
      fontSize: '0.5rem',
      '@media (max-width:600px)': {
        fontSize: '0.2rem',
      },
    },
    button: {
      textTransform: 'none',
      fontSize: '1rem', 
      '@media (max-width:600px)': {
        fontSize: '0.2rem',
      },
    },
  },
});


theme = responsiveFontSizes(theme);

export default theme;

