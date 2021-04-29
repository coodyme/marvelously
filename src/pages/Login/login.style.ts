import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.4rem;
    color: ${props => props.theme.primary};
  }

  .fields {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 2.4rem 0;
  }

  .fields p {
    margin: 1.4rem;
  }

  .fields input {
    width: 100%;
    height: 6.8rem;
    border-radius: 3.5rem;
    background: ${props => props.theme.text};
    border: 1px solid #fff;
    padding: 0 1.6rem;
    font: 1.6rem;
  }

  .fields input + input {
    margin-top: 1.4rem;
  }

  .actions {
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.4rem;
  }

  .actions .save-login {
    display: flex;
  }

  .actions .save-login input {
    margin-right: 0.8rem;
  }

  .actions a {
    color: ${props => props.theme.secondary};
    text-decoration: none;
  }

  .actions a:hover {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }

  .enter {
    width: 350px;
    height: 6.8rem;
    border-radius: 3.5rem;
    background: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    padding: 0 1.6rem;
    font: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text};
    text-decoration: none;
    font-size: 1.8rem;
  }

  .footer {
    margin-top: 1.4rem;
  }

  .footer span {
    margin-right: 0.4rem;
  }

  .footer a {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }

  @media (max-width: 700px) {
    width: 100vw;
  }
`
