import React from 'react'

import Menu from '../../components/Menu/menu.component'
import Modal from '../../components/Modal/modal.component'

import { MoviesContainer } from './movies.style'

const Movies: React.FC = () => {
  return (
    <>
      <Menu />
      <MoviesContainer>
        <Modal />
      </MoviesContainer>
    </>
  )
}

export default Movies
