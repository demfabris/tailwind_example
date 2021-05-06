import { useRouter } from 'next/dist/client/router'
import { useEffect, useMemo } from 'react'
import { useSessionStore } from 'store'

export function useAuth() {
  const { isLoggedIn } = useSessionStore()

  const router = useRouter()

  const allowedPaths = useMemo(
    () => ['/purchase', '/list', '/total_cashback'],
    []
  )

  useEffect(() => {
    if (allowedPaths.includes(router.pathname) && !isLoggedIn) {
      router.push('/login')
    }
  }, [])
}
