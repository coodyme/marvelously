import React from 'react'
import { Link } from 'react-router-dom'
import mainLogoImg from '../../assets/main_logo.png'

import { HomeContainer } from './home.style'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Link to="/login">
        <img src={mainLogoImg} alt="Logo" />
      </Link>
    </HomeContainer>
  )
}

export default Home
