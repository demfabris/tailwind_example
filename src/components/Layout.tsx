import { ReactNode } from 'react'
import { Header } from './Header'
import { Navigation } from './Navigation'

interface Props {
  children?: ReactNode
}
export const Layout = ({ children }: Props) => (
  <section>
    <Header />
    <Navigation />
    <main className="flex items-center justify-center mt-24">{children}</main>
  </section>
)
