import { PurchaseItem } from 'components/PurchaseItem'
import { Layout } from '../components/Layout'

const ListPurchasesPage = () => (
  <Layout>
    <div className="flex flex-col px-4 xl:w-2/5 xl:px-24">
      <h1 className="text-lg font-bold text-blue-500 leading-6">
        List purchases
      </h1>
      <span className="mt-1 mb-6 text-sm text-gray-600">
        Here you can see all your purchases details aswell as it's aproval's
        state
      </span>
      <ul className="w-full space-y-6">
        <PurchaseItem
          uid="92839223"
          status={0}
          price="R$992,99"
          cashback="R$123,00"
          cashback_ratio="30%"
          date="24/04/2024"
        />
        <PurchaseItem
          uid="92839223"
          status={0}
          price="R$992,99"
          cashback="R$123,00"
          cashback_ratio="30%"
          date="24/04/2024"
        />
        <PurchaseItem
          uid="92839223"
          status={0}
          price="R$992,99"
          cashback="R$123,00"
          cashback_ratio="30%"
          date="24/04/2024"
        />
      </ul>
    </div>
  </Layout>
)

export default ListPurchasesPage
