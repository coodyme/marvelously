import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import { darkTheme } from './styles/theme'

import Home from './pages/Home/home.page'
import Login from './pages/Login/login.page'
import Movies from './pages/Movies/movies.page'
import Characters from './pages/Characters/characters.page'
import Comics from './pages/Comics/comics.page'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/movies" component={Movies} />
        <Route path="/characters" component={Characters} />
        <Route path="/comics" component={Comics} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
