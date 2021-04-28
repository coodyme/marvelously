import React from 'react'
import { Link } from 'react-router-dom'

import mainLogoImg from '../../assets/main_logo.png'

import { LoginContainer } from './login.style'

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <img src={mainLogoImg} alt="Logo" />
      <h1>Bem-vindo(a) de volta!</h1>
      <p>Acesse sua conta:</p>
      <div className="fields">
        <input type="text" />
        <input type="text" />
      </div>
      <div className="actions">
        <div className="remember">Salvar login</div>
        <Link to="/login">Esqueci a senha</Link>
      </div>
      <Link className="enter" to="/characters">
        Entrar
      </Link>
      <div className="footer">
        Ainda nao tem o login?
        <Link to="/login">Cadastre-se</Link>
      </div>
    </LoginContainer>
  )
}

export default Login
