import { Button } from 'components/Button'
import { Input } from 'components/Input'
import Link from 'next/link'
import { Layout } from '../components/Layout'

const LoginPage = () => (
  <Layout>
    <form className="flex flex-col px-4 xl:w-2/5 xl:px-12">
      <h1 className="text-lg font-bold text-blue-500 leading-6">Login</h1>
      <span className="mt-1 mb-6 text-sm text-gray-600">
        Please provide your e-mail and password to access the dashboard.
      </span>
      <Input alt label="E-mail" />
      <Input alt label="Password" />
      <div className="flex flex-col mt-2 items-center justify-between lg:flex-row">
        <Button label="Login" />
        <span className="py-4 mt-4 text-sm lg:mt-0">OR</span>
        <Link href="signup">
          <button type="button" className="h-full py-4 font-bold text-blue-500">
            Create account
          </button>
        </Link>
      </div>
    </form>
  </Layout>
)

export default LoginPage
