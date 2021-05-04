import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Layout } from '../components/Layout'

const PurchasePage = () => (
  <Layout>
    <div className="flex flex-col w-4/5 xl:w-2/5">
      <h1 className="mb-4 text-4xl font-bold">New purchase</h1>
      <Input label="UID" />
      <Input label="Amount" />
      <Input label="UID" />
      <Button label="Purchase" />
    </div>
  </Layout>
)

export default PurchasePage
