import React from 'react'

import Menu from '../../components/Menu/menu.component'

import { CharactersContainer } from './characters.style'

const Characters: React.FC = () => {
  return (
    <CharactersContainer>
      <Menu />
      <h1>Characters</h1>
    </CharactersContainer>
  )
}

export default Characters
