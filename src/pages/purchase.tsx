import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Layout } from '../components/Layout'

const PurchasePage = () => (
  <Layout>
    <div className="flex flex-col w-4/5 xl:w-2/5">
      <h1 className="text-lg font-bold text-blue-500 leading-6">
        New purchase
      </h1>
      <span className="mt-1 mb-6 text-sm text-gray-600">
        Please provide your purchase details that will be processed by our
        cashback system.
      </span>
      <Input alt type="text" label="Unique ID" placeholder="e.g: 424242" />
      <Input alt type="text" label="Amount" placeholder="R$" />
      <hr className="my-4" />
      <Input label="Date" type="date" />
      <br />
      <Button label="Purchase" />
    </div>
  </Layout>
)

export default PurchasePage
