import React from 'react'
import { Link } from 'react-router-dom'
import mainLogoImg from '../../assets/main_logo.png'
import md5 from 'md5'

import { HomeContainer } from './home.style'

import useFetch from '../../hooks/useFetch'

const PUBLIC_KEY = '87bbbbc6e194a190c90d8e74d1547336'
const PRIVATE_KEY = '41a782d6f44d8b5703871a05055714b2f3f81d31'
const TIME = Number(new Date())
const HASH = md5(TIME + PRIVATE_KEY + PUBLIC_KEY)

const Home: React.FC = () => {
  const { response, isLoading } = useFetch(
    `/characters?ts=${TIME}&apikey=${PUBLIC_KEY}&hash=${HASH}`
  )

  console.log('Response:', response, isLoading)

  return (
    <HomeContainer>
      <Link to="/login">
        <img src={mainLogoImg} alt="Logo" />
      </Link>
    </HomeContainer>
  )
}

export default Home
