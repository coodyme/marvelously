import React from 'react'

import Menu from '../../components/Menu/menu.component'

import { MoviesContainer } from './movies.style'

const Movies: React.FC = () => {
  return (
    <MoviesContainer>
      <Menu />
      <h1>Movies</h1>
    </MoviesContainer>
  )
}

export default Movies
