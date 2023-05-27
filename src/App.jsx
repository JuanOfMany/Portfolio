import React, { useEffect, useState, useMemo, useRef } from 'react'
import Miata from './components/Miata.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import Carousel from './components/Carousel.jsx'

import useMediaQuery from '@mui/material/useMediaQuery'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { amber, grey, deepOrange } from '@mui/material/colors'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        JuanPinol.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
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
      : //if mode doesn't equal 'light' uses next config
        {
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
})

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const appContainer = useRef(null)
  let maxHeight = null

  const handleScroll = () => {
    var position = window.pageYOffset
    setScrollPercent(
      Math.round((position / (maxHeight - window.innerHeight)) * 100)
    )
  }

  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    maxHeight = appContainer.current.clientHeight
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="container" ref={appContainer}>
        <ProgressBar width={scrollPercent} />
        <div
          id="button-container"
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <Miata />

          <button onClick={() => colorMode.toggleColorMode()}>
            Change light/dark mode!
          </button>
        </div>
        <Carousel />
        <Copyright sx={{ mt: 5 }} />
      </div>
    </ThemeProvider>
  )
}
