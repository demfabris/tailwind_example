import Link from 'next/link'

interface Props {
  pathname: string
}
export const Navigation = ({ pathname }: Props) => {
  const handleHighlightRoute = (route: string): string =>
    pathname.includes(route) ? 'text-blue-500 font-bold' : ''

  return (
    <div className="flex justify-center mt-24">
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
