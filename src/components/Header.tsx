export const Header = () => {
  return (
    <header className="flex flex-row items-center h-20 shadow-md">
      <div className="flex flex-grow">
        <img className="object-contain w-32 h-full" src="./logo2.svg" alt="" />
      </div>
      <nav className="flex-row justify-end mr-6 font-medium space-x-6">
        <a href="#" className="">
          Login
        </a>
        <a href="#" className="font-bold text-blue-500 border-b-4">
          Sign up
        </a>
      </nav>
    </header>
  )
}
