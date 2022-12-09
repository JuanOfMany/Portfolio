import * as React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, grey, deepOrange } from '@mui/material/colors';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink
} from "react-router-dom";
import { Outlet } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        JuanPinol.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//function that takes in a mode and returns an config object based on mode input
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
        //if mode doesn't equal 'light' uses next config
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: '#121212',
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

export default function App () {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
        prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  )

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
          <div id="sidebar">
            <div>
              <h1>Juan Pinol</h1>
            </div>
            <a>
              <button onClick={(() => colorMode.toggleColorMode())}>
                  Change light/dark mode!
              </button>
            </a>
            <RouterLink to="/">
              <button>Home</button>
            </RouterLink>
            <RouterLink to="/miata">
              <button>Miata</button>
            </RouterLink>
            <RouterLink to="/aboutme">
              <button>About Me</button>
            </RouterLink>
            <RouterLink to="/errortest">
              <button>Error Tester</button>
            </RouterLink>
          </div>
            <div>
              <Outlet />
              <Copyright sx={{ mt: 5 }} />
            </div>

    </ThemeProvider>
  );
}

