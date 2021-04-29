/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'

import Menu from '../../components/Menu/menu.component'
import Card from '../../components/Card/card.component'
import Loading from '../../components/Loading/loading.component'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { CharactersContent } from './characters.style'

import md5 from 'md5'

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  async function sanitize(characters: ICharacter[]) {
    const sanitized: ICharacter[] = []

    characters.forEach(character => {
      if (
        character.desc !== '' &&
        character.thumb !==
        `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg`
      )
        sanitized.push(character)
    })

    return sanitized
  }

  const fetch = async () => {
    setIsLoading(true)

    const response = await api.get(
      `/characters?ts=${TIME}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=100&offset=0`
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
    const sanitizedCharacters = await sanitize(characters)
    setCharacters(sanitizedCharacters)
    setIsLoading(false)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <Menu />
      <CharactersContent>
        {isLoading ? (
          <Loading />
        ) : (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={false}
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {characters?.map((character, index) => {
              return (
                <Card
                  key={index}
                  title={character.name}
                  desc={character.desc}
                  thumb={character.thumb}
                />
              )
            })}
          </Carousel>
        )}
      </CharactersContent>
    </>
  )
}

export default Characters
