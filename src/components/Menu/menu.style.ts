import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 100%;
  height: 80px;

  background: ${props => props.theme.background};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.text};
    transition: 0.3s;
  }

  a:hover {
    text-decoration: underline;
    color: ${props => props.theme.primary};
  }

  .logo {
    display: flex;
    align-items: left;
    margin-left: 50px;
  }

  .panel {
    display: flex;
    justify-content: space-between;
  }

  .panel ul {
    list-style: none;

    display: flex;
    flex-direction: row;

    margin-right: 20px;
  }

  .panel ul li + li {
    margin-left: 20px;
  }

  .panel .profile {
    margin: -15px 50px;
    border-radius: 50%;
    background-color: #f0f0f0;
    width: 50px;
    height: 50px;
  }
`
