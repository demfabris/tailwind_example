import { NextApiRequest, NextApiResponse } from 'next'

const mockData = [
  {
    uid: '2983892389',
    status: 0,
    price: 932.0,
    cashback: 333.5,
    cashback_ratio: 25,
    date: '22/12/1994'
  },
  {
    uid: '2983892377',
    status: 1,
    price: 9322.0,
    cashback: 3353.5,
    cashback_ratio: 25,
    date: '22/12/1994'
  },
  {
    uid: '2968892912',
    status: 2,
    price: 132.0,
    cashback: 53.5,
    cashback_ratio: 25,
    date: '22/12/1994'
  }
]

export default function listHandler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(mockData)
}
