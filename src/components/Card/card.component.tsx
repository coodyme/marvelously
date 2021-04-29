import React from 'react'

import { CardContainer } from './card.style'

const Card: React.FC = () => {
  return (
    <CardContainer>
      <div className="content">
        <p>Title</p>
        <span>
          Lorem ipsum dollar sit ammet. Lorem ipsum dollar sit ammet. Lorem
          ipsum dollar sit ammet.{' '}
        </span>
        <br />
        <a href="/">ver detalhes</a>
      </div>
    </CardContainer>
  )
}

export default Card
