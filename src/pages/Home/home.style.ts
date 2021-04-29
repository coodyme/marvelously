import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    opacity: 1;
    animation: anim 2s;
  }

  img:hover {
    opacity: 0.5;
    transition: opacity 0.5s;
  }

  @keyframes anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
