import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: '#121212',
        default: '#121212'
      },
      text: {
        primary: '#fff'
      },
      primary: {
        light: '#bc2717',
        main: '#9f1313',
        dark: '#830000'
      },
      secondary: {
        light: '#ff4c1c',
        main: '#f53e12',
        dark: '#cf2500'
      },
    },
    typography: {
        fontFamily: 'Trirong',
    }
  });
  
  export default theme;
  