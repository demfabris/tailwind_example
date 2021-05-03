import Link from 'next/link'
import { Button } from './Button'
import { S } from './Header.styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src="./logo2.svg" alt="" />
      </S.Logo>
      <S.Navigation>
        <Button.Void>
          <Link href="#">Login</Link>
        </Button.Void>
        <Button.Void alt>
          <Link href="#">Sign Up</Link>
        </Button.Void>
      </S.Navigation>
    </S.Container>
  )
}
