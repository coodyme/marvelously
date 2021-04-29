import React from 'react'

import Menu from '../../components/Menu/menu.component'
import Card from '../../components/Card/card.component'
import Modal from '../../components/Modal/modal.component'

import { CharactersContent } from './characters.style'

const Characters: React.FC = () => {
  return (
    <>
      <Menu />
      <CharactersContent>
        <Card />
      </CharactersContent>
    </>
  )
}

export default Characters
