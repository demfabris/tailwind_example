import { NextApiRequest, NextApiResponse } from 'next'

export default function totalHandler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ amount: 9392.099 })
}
