import styled from 'styled-components'

const Frame = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: var(--bg);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
`

const Main = styled.main`
  display: flex;
  width: 100%;
`

export const S = {
  Frame,
  Container,
  Main
}
