import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { Dispatch, SetStateAction, useMemo } from 'react'
import { useSessionStore } from 'store'

interface Props {
  sidebarState: [boolean, Dispatch<SetStateAction<boolean>>]
  pathname: string
}
export const Header = ({ sidebarState, pathname }: Props) => {
  const [sidebar, setSidebar] = sidebarState
  const { isLoggedIn, logout } = useSessionStore()
  const router = useRouter()

  const allowedPaths = useMemo(
    () => ['/purchase', '/list', '/total_cashback'],
    [pathname]
  )

  return (
    <header className="flex flex-row items-center h-24 mx-4 border-b-4">
      <div className="flex flex-row items-center flex-grow">
        {allowedPaths.includes(pathname) ? (
          <button
            className={`flex items-center justify-center w-12 h-12 mr-2 rounded-full lg:hidden ${
              sidebar ? 'bg-gray-100' : ''
            }`}
            onClick={() => setSidebar((state) => !state)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        ) : (
          <></>
        )}
        <Link href="/">
          <div className="flex items-center justify-center overflow-hidden">
            <img
              className="object-cover -ml-3 cursor-pointer"
              src="./logo2.svg"
              alt=""
              style={{ height: '5em', width: '8em' }}
            />
          </div>
        </Link>
      </div>
      <nav className="flex-row justify-end font-medium space-x-6">
        {!isLoggedIn && (
          <a href="login" className="">
            Login
          </a>
        )}
        {isLoggedIn ? (
          <button
            className="font-bold text-blue-500"
            onClick={() => {
              logout()
              router.push('/login')
            }}
          >
            Logout
          </button>
        ) : (
          <a href="signup" className="font-bold text-blue-500">
            Sign Up
          </a>
        )}
      </nav>
    </header>
  )
}
