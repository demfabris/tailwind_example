import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Layout } from '../components/Layout'
import { useForm } from 'react-hook-form'
import { useRequest } from 'hooks'

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const request = useRequest()

  const onSubmit = (data: any) => {
    request(data, '/signup', { method: 'POST' }).then((e) => console.log(e))
  }

  return (
    <Layout>
      <form
        className="flex flex-col px-4 xl:w-3/5 xl:px-24"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-1 text-lg font-bold text-blue-500 leading-6">
          Sign Up
        </h1>
        <span className="mb-6 text-sm text-gray-600">
          By signing up you'll be agreeing with whatever terms of usage i wish.
          Thank you.
        </span>
        <div className="justify-between lg:flex lg:flex-row lg:space-x-4">
          <Input
            alt
            erroring={errors.fullname}
            label="Full name"
            style={{ width: '100%' }}
            {...register('fullname', { required: true })}
          />
          <Input
            alt
            erroring={errors.email}
            label="E-mail"
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?[a-z]?/
            })}
          />
        </div>
        <span className="mt-1 text-sm text-gray-600">
          Please provide a valid brazillian CPF number.
        </span>
        <Input
          erroring={errors.cpf}
          label="CPF"
          placeholder="Only numbers, e.g. 30030030099"
          {...register('cpf', {
            required: true,
            pattern: /[0-9]*/,
            maxLength: 11,
            minLength: 11
          })}
        />
        <div className="justify-between lg:flex lg:flex-row lg:space-x-4">
          <Input
            erroring={errors.password}
            alt
            type="password"
            label="Password"
            {...register('password', { required: true })}
          />
          <Input
            alt
            erroring={errors.confirm_password}
            type="password"
            label="Confirm password"
            {...register('confirm_password', {
              required: true,
              validate: (value) => value === watch('password')
            })}
          />
        </div>
        <Button
          type="submit"
          label="Confirm"
          style={{ marginTop: '1em' }}
          onClick={() => console.log(errors, watch('password'))}
        />
      </form>
    </Layout>
  )
}

export default SignUpPage
