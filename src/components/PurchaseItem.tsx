import { toBRL } from 'utils/formatCurrency'

enum CashbackStatus {
  Pending,
  Approved,
  Denied
}

interface Props {
  uid: string
  status: CashbackStatus
  price: number
  cashback: number
  cashback_ratio: number
  date: string
}
export const PurchaseItem = ({
  uid,
  status,
  price,
  cashback,
  cashback_ratio,
  date
}: Props) => {
  const handleCashbackStatus = (status: CashbackStatus) => {
    switch (status) {
      case 1:
        return 'Approved'
      case 2:
        return 'Denied'
      default:
        return 'Pending'
    }
  }

  return (
    <>
      <li className="relative container flex flex-col h-32 p-4 border-2 rounded-md shadow-sm transition-all hover:shadow-xl">
        <div className="flex flex-row justify-between w-full">
          <h1 className="px-2 py-1 text-sm text-gray-800 border-2 rounded-full bg-gray-50">
            {uid}
          </h1>
          <h1 className="px-2 py-1">{handleCashbackStatus(status)}</h1>
        </div>
        <div className="flex flex-col w-full mt-auto">
          <div className="flex flex-row">
            <span className="mr-2 font-medium">Price:</span>
            <span className="text-gray-500">{toBRL(price)}</span>
          </div>
          <div className="flex flex-row w-full">
            <span className="block mr-2 font-medium">Cashback:</span>
            <span className="text-green-500">{toBRL(cashback)}</span>
            <span className="flex items-center px-2 ml-4 text-xs bg-gray-100 rounded-full">
              ({cashback_ratio}%)
            </span>
          </div>
        </div>
        <span className="absolute bottom-0 right-0 mr-6 text-sm text-gray-400 mb-11 lg:mb-5">
          {date}
        </span>
      </li>
      <hr className="w-6 transform rotate-90" />
    </>
  )
}
