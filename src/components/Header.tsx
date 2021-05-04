import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex flex-row items-center h-20 shadow-md">
      <div className="flex flex-grow">
        <Link href="/">
          <img
            className="object-cover w-32 cursor-pointer"
            src="./logo2.svg"
            alt=""
          />
        </Link>
      </div>
      <nav className="flex-row justify-end mr-6 font-medium space-x-6">
        <a href="login" className="">
          Login
        </a>
        <a href="signup" className="font-bold text-blue-500">
          Sign up
        </a>
      </nav>
    </header>
  )
}
