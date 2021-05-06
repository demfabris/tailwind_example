import { fetcher } from 'services'
import useSWR from 'swr'
import { toBRL } from 'utils/formatCurrency'
import { Layout } from '../components/Layout'

const CashbackPage = () => {
  const { data } = useSWR('/total_cashback', fetcher)

  return (
    <Layout>
      <div className="flex flex-col px-4 xl:w-2/5 xl:px-24">
        <h1 className="text-lg font-bold text-blue-500 leading-6">
          Total cashback
        </h1>
        <span className="mt-1 mb-6 text-sm text-gray-600">
          Here you'll see the amount of cashback you acumulated over the years.
        </span>
        <span className="text-3xl text-green-500 font-light">
          {toBRL(data?.amount || 0)}
        </span>
      </div>
    </Layout>
  )
}

export default CashbackPage
