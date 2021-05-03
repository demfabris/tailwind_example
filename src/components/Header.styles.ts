import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 5em;
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  a {
    text-decoration: none;
  }
`

const Logo = styled.div`
  width: 10em;
  height: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const S = {
  Container,
  Navigation,
  Logo
}
