import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { Layout } from '../components/Layout'

const IndexPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  }, [])

  return <Layout>you are being redirected....</Layout>
}

export default IndexPage
