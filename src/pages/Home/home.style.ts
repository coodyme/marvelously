import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: left;
  align-items: center;

  img {
    margin-left: 150px;
    opacity: 1;
    transition: 0.3s;
  }

  img:hover {
    opacity: 0.5;
  }
`
