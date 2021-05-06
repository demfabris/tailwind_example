import { useRouter } from 'next/dist/client/router'
import { ReactNode, useState } from 'react'
import { useSessionStore } from 'store'
import { Header } from './Header'
import { Navigation } from './Navigation'

interface Props {
  children?: ReactNode
}
export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isLoggedIn, logout } = useSessionStore()
  const { pathname } = useRouter()

  return (
    <section>
      <Header
        sidebarState={[sidebarOpen, setSidebarOpen]}
        pathname={pathname}
        isLoggedIn={isLoggedIn}
        logout={logout}
      />
      <Navigation sidebarOpen={sidebarOpen} pathname={pathname} />
      <main className="flex items-center justify-center my-12">{children}</main>
    </section>
  )
}
