import { ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children?: ReactNode
}
export const Layout = ({ children }: Props) => (
  <section className="">
    <Header />
  </section>
)
