import React from 'react'

import { CardContainer } from './card.style'

type CardProps = {
  title: string
  desc: string
  thumb: string
}

const Card: React.FC<CardProps> = ({ title, desc, thumb }) => {
  return (
    <CardContainer
      style={{ background: `url(${thumb})`, backgroundSize: 'cover' }}
    >
      <div className="content">
        <p>{title}</p>
        <span>{desc}</span>
        <br />
        <a href="/">ver detalhes</a>
      </div>
    </CardContainer>
  )
}

export default Card
