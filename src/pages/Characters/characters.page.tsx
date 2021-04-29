import React, { useState, useEffect } from 'react'
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

import md5 from 'md5'
import useFetch from '../../hooks/useFetch'

import api from '../../services/api.service'

const PUBLIC_KEY = '87bbbbc6e194a190c90d8e74d1547336'
const PRIVATE_KEY = '41a782d6f44d8b5703871a05055714b2f3f81d31'
const TIME = Number(new Date())
const HASH = md5(TIME + PRIVATE_KEY + PUBLIC_KEY)

interface ICharacterRequest {
  name: string
  description: string
  thumbnail: {
    extension: string
    path: string
  }
}
interface ICharacter {
  name: string
  desc: string
  thumb: string
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)

      const response = await api.get(
        `/characters?ts=${TIME}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      )

      const { data } = response.data
      const results = data.results

      const characters: Array<ICharacter> = results.map(
        (result: ICharacterRequest) => {
          return {
            name: result.name,
            desc: result.description,
            thumb: `${result.thumbnail.path}.${result.thumbnail.extension}`
          }
        }
      )

      setCharacters(characters)
      setIsLoading(false)
    }
    fetch()
  }, [])

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
