import React from 'react'
import Carousel, {
  arrowsPlugin,
  slidesToShowPlugin
} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Menu from '../../components/Menu/menu.component'
import Card from '../../components/Card/card.component'
import Modal from '../../components/Modal/modal.component'

import { CharactersContent } from './characters.style'

import rightImg from '../../assets/right.png'
import leftImg from '../../assets/left.png'

const Characters: React.FC = () => {
  return (
    <>
      <Menu />
      <CharactersContent>
        <Carousel
          plugins={[
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <img src={leftImg} />,
                arrowLeftDisabled: <img src="" />,
                arrowRight: <img src={rightImg} />,
                arrowRightDisabled: <img src="" />,
                addArrowClickHandler: true
              }
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3
              }
            }
          ]}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </CharactersContent>
    </>
  )
}

export default Characters
