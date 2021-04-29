import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 663px;
  height: 439px;

  display: flex;
  flex-direction: row;

  background-color: ${props => props.theme.primary};

  border-radius: 25px;
  color: ${props => props.theme.text};

  text-align: justify;

  box-shadow: 0 14px 20px 0 rgba(0, 0, 0, 0.8), 0 25px 60px 0 rgba(0, 0, 0, 0.8);

  .cover {
    width: 40%;
    background-image: url('/images/comic.png');
    border-radius: 25px;
  }

  .content {
    width: 60%;
    margin: 1.4rem 0 0 2.8rem;
    padding-right: 2.8rem;
  }

  .content h1 {
  }

  .content p {
  }

  .info {
    margin-top: 2.8rem;
  }

  .info p {
    font-weight: 300;
  }

  .platforms {
    margin-top: 1.4rem;
  }

  .platforms-icons {
    margin-top: 1.4rem;
  }

  .platforms-icons img + img {
    margin-left: 0.7rem;
  }

  .rating {
    margin-top: 1.4rem;
  }

  .rating-stars {
    margin-top: 1.4rem;
  }

  .rating-stars img + img {
    margin-left: 0.7rem;
  }
`
