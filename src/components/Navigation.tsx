import Link from 'next/link'
import { useMemo } from 'react'

interface Props {
  pathname: string
  sidebarOpen: boolean
}
export const Navigation = ({ sidebarOpen, pathname }: Props) => {
  const handleHighlightRoute = (route: string): string =>
    pathname.includes(route)
      ? 'border-l-4 border-blue-500 text-blue-500'
      : 'border-l-4 border-white'

  const allowedPaths = useMemo(
    () => ['/purchase', '/list', '/total_cashback'],
    [pathname]
  )

  const handleSideBarOpen = (state: boolean) =>
    state ? '' : '-translate-x-full'

  return allowedPaths.includes(pathname) ? (
    <div
      className={`fixed flex flex-col min-h-screen w-56 transition-all transform sm:transform-gpu z-50 ${handleSideBarOpen(
        sidebarOpen
      )}`}
    >
      <ul className="flex flex-col justify-start min-h-screen pt-8 font-bold bg-white shadow-xl">
        <li
          className={`w-full h-16 flex items-center ${handleHighlightRoute(
            'purchase'
          )}`}
        >
          <Link href="purchase">
            <div className="flex flex-row items-center w-full h-full cursor-pointer hover:bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Purchase
            </div>
          </Link>
        </li>
        <li
          className={`w-full h-16 flex items-center ${handleHighlightRoute(
            'list'
          )}`}
        >
          <Link href="list">
            <div className="flex flex-row items-center w-full h-full cursor-pointer hover:bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              List purchases
            </div>
          </Link>
        </li>
        <li
          className={`w-full h-16 flex items-center ${handleHighlightRoute(
            'total_cashback'
          )}`}
        >
          <Link href="total_cashback">
            <div className="flex flex-row items-center w-full h-full cursor-pointer hover:bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Total cashback
            </div>
          </Link>
        </li>
      </ul>
    </div>
  ) : (
    <></>
  )
}
