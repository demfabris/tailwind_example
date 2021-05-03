import { S } from './Button.styles'

interface Props {
  children: React.ReactNode
  [props: string]: unknown
}
const Regular = ({ children, ...props }: Props) => {
  return <S.Regular {...props}>{children}</S.Regular>
}

const Void = ({ children, ...props }: Props) => (
  <S.Void {...props}>{children}</S.Void>
)

export const Button = {
  Regular,
  Void
}
