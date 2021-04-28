import React from 'react'

import { Link } from 'react-router-dom'

import { MenuContainer } from './menu.style'

import logoImg from '../../assets/logo.png'

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <div className="logo">
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
      </div>
      <div className="panel">
        <ul>
          <li>
            <Link to="/characters">Personagens</Link>
          </li>
          <li>
            <Link to="/movies">Filmes</Link>
          </li>
          <li>
            <Link to="/comics">HQs</Link>
          </li>
        </ul>
        <div className="profile"></div>
      </div>
    </MenuContainer>
  )
}

export default Menu
