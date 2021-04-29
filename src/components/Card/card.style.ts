import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 289px;
  height: 439px;

  display: flex;
  flex-direction: column-reverse;

  background: url('images/comic.png');
  background-size: cover;

  border: 1px none;
  border-radius: 25px;

  .content {
    height: 50%;
    border-radius: 25px;
    font-weight: 400;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 1.4rem;
    color: ${props => props.theme.secondary};

    background: linear-gradient(rgba(256, 0, 0, 1), rgba(0, 0, 0, 0.7));
  }

  .content p {
    font-size: 2.4rem;
    color: ${props => props.theme.text};
    margin-top: 1.4rem;
    text-align: center;
  }

  .content span {
    margin: 0 1.4rem;
  }

  .content a {
    font-size: 1.8rem;
    color: ${props => props.theme.secondary};
    text-decoration: none;
    margin-bottom: 1.4rem;
    text-align: center;
  }

  .content a:hover {
    text-decoration: underline;
  }
`
