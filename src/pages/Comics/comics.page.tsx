import React from 'react'

import Menu from '../../components/Menu/menu.component'

import { ComicsContainer } from './comics.style'

const Comics: React.FC = () => {
  return (
    <ComicsContainer>
      <Menu />
      <h1>Comics</h1>
    </ComicsContainer>
  )
}

export default Comics
