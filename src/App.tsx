import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import { darkTheme } from './styles/theme'
import { Button } from '@material-ui/core'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
