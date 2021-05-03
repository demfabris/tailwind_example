export const Header = () => {
  return (
    <header className="flex flex-row items-center h-20 shadow-md">
      <div className="flex flex-grow">
        <img className="object-contain w-32 h-full" src="./logo2.svg" alt="" />
      </div>
      <nav className="flex-row justify-end mr-6 font-medium text-gray-700 space-x-6">
        <a href="#" className="font-bold text-blue-500 hover:text-blue-300">
          Login
        </a>
        <a href="#">Sign up</a>
      </nav>
    </header>
  )
}
