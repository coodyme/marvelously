import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import { darkTheme } from './styles/theme'

import Routes from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
