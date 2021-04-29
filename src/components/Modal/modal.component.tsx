import React from 'react'

import { Link } from 'react-router-dom'

import { ModalContainer } from './modal.style'

import disneyImg from '../../assets/disney.png'
import starImg from '../../assets/star.png'

const Modal: React.FC = () => {
  return (
    <ModalContainer>
      <div className="cover"></div>
      <div className="content">
        <h1>Title</h1>
        <div className="info">
          <p>Aparicoes</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
        <div className="platforms">
          <p>Disponivel em streaming:</p>
          <div className="platforms-icons">
            <img src={disneyImg} alt="" srcSet="" />
            <img src={disneyImg} alt="" srcSet="" />
            <img src={disneyImg} alt="" srcSet="" />
          </div>
        </div>
        <div className="rating">
          <h2>Critica</h2>
          <div className="rating-stars">
            <img src={starImg} alt="" srcSet="" />
            <img src={starImg} alt="" srcSet="" />
            <img src={starImg} alt="" srcSet="" />
            <img src={starImg} alt="" srcSet="" />
            <img src={starImg} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

export default Modal
