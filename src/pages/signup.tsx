import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Layout } from '../components/Layout'

const SignUpPage = () => (
  <Layout>
    <form className="flex flex-col w-4/5 xl:w-2/5">
      <h1 className="font-bold text-5xl mb-12">Create new account</h1>
      <Input label="Username" />
      <Input label="CPF" />
      <Input label="Password" />
      <Input label="Confirm password" />
      <Button label="Sign Up" style={{ marginTop: '1em' }} />
    </form>
  </Layout>
)

export default SignUpPage
