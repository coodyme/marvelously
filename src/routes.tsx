import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home/home.page'
import Login from './pages/Login/login.page'
import Movies from './pages/Movies/movies.page'
import Characters from './pages/Characters/characters.page'
import Comics from './pages/Comics/comics.page'

const Router: React.FC<BrowserRouter> = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/movies" component={Movies} />
      <Route path="/characters" component={Characters} />
      <Route path="/comics" component={Comics} />
    </BrowserRouter>
  )
}

export default Router
