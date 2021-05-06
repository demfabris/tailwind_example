import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { useRequest } from 'hooks'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useSessionStore } from 'store'
import { Layout } from '../components/Layout'

const LoginPage = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const { login } = useSessionStore()
  const request = useRequest()

  const onSubmit = (data: { email: string; password: string }) => {
    request(data, '/login', { method: 'POST' }).then((res) => {
      const { auth } = res ?? {}

      if (!!auth) {
        login(auth)
        router.push('/purchase')
      } else {
        alert('Wrong credentials')
      }
    })
  }

  return (
    <Layout>
      <form
        className="flex flex-col px-4 xl:w-2/5 xl:px-24"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-lg font-bold text-blue-500 leading-6">Login</h1>
        <span className="mt-1 mb-6 text-sm text-gray-600">
          Please provide your e-mail and password to access the dashboard.
        </span>
        <Input alt label="E-mail" {...register('email', { required: true })} />
        <Input
          alt
          label="Password"
          {...register('password', { required: true })}
        />
        <div className="flex flex-col mt-2 items-center justify-between lg:flex-row">
          <Button label="Login" />
          <span className="py-4 mt-4 text-sm lg:mt-0">OR</span>
          <Link href="signup">
            <button
              type="button"
              className="h-full py-4 font-bold text-blue-500"
            >
              Create account
            </button>
          </Link>
        </div>
      </form>
    </Layout>
  )
}

export default LoginPage
