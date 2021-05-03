import { ReactNode } from 'react'
import { Header } from './Header'

import { S } from './Layout.styles'

interface Props {
  children?: ReactNode
}
export const Layout = ({ children }: Props) => (
  <S.Frame>
    <S.Container>
      <Header />
      <S.Main>{children}</S.Main>
    </S.Container>
  </S.Frame>
)
