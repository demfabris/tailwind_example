import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

export const Navigation = () => {
  const { pathname } = useRouter()

  const handleHighlightRoute = (route: string): string =>
    pathname.includes(route) ? 'text-blue-500 font-bold' : ''

  return (
    <div className="flex justify-center mt-12">
      <ul className="flex flex-row items-center space-x-6 text-xl">
        <li className={handleHighlightRoute('purchase')}>
          <Link href="purchase">Purchase items</Link>
        </li>
        <li className={handleHighlightRoute('list')}>
          <Link href="list">List purchases</Link>
        </li>
      </ul>
    </div>
  )
}
