import { PurchaseItem } from 'components/PurchaseItem'
import { Item } from 'interfaces/item'
import { fetcher } from 'services'
import useSWR from 'swr'
import { Layout } from '../components/Layout'

const ListPurchasesPage = () => {
  const { data } = useSWR('list', fetcher)

  return (
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
          {data?.map((item: Item, index: number) => (
            <PurchaseItem
              key={index}
              uid={item.uid}
              status={item.status}
              price={item.price}
              cashback={item.cashback}
              cashback_ratio={item.cashback_ratio}
              date={item.date}
            />
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default ListPurchasesPage
