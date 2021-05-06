import { NextApiRequest, NextApiResponse } from 'next'

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = {
    auth: '6b3a55e0261b0304143f805a24924d0c1c44524821305f31d9277843b8a10f4e'
  }
  if (req.body.email === 'email' && req.body.password === 'password') {
    return res.status(200).json(response)
  }

  return res.status(403).json('Unauthorized')
}
