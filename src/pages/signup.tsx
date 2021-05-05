import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Layout } from '../components/Layout'

const SignUpPage = () => (
  <Layout>
    <form className="flex flex-col px-4 xl:w-3/5 xl:px-24">
      <h1 className="text-lg font-bold text-blue-500 leading-6 mb-1">
        Sign Up
      </h1>
      <span className="mb-6 text-sm text-gray-600">
        By signing up you'll be agreeing with whatever terms of usage i wish.
        Thank you.
      </span>
      <div className="justify-between lg:flex lg:flex-row lg:space-x-4">
        <Input alt label="Full name" style={{ width: '100%' }} />
        <Input alt label="E-mail" />
      </div>
      <span className="mt-1 text-sm text-gray-600">
        Please provide a valid brazillian CPF number.
      </span>
      <Input label="CPF" placeholder="000.000.000-00" />
      <div className="justify-between lg:flex lg:flex-row lg:space-x-4">
        <Input alt label="Password" />
        <Input alt label="Confirm password" />
      </div>
      <Button label="Confirm" style={{ marginTop: '1em' }} />
    </form>
  </Layout>
)

export default SignUpPage
