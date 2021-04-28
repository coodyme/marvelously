import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fields {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 2.4rem 0;
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
`
