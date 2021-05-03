import { ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children?: ReactNode
}
export const Layout = ({ children }: Props) => (
  <section className="">
    <Header />
    <main className="flex items-center justify-center mt-16">{children}</main>
  </section>
)
