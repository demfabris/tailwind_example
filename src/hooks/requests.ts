import { useCallback } from 'react'

type Payload = {
  [props: string]: string | unknown
}

type RequestConfig = {
  method: 'GET' | 'POST'
}

type ReqInstance = (
  payload: Payload,
  endpoint: string,
  requestConfig: RequestConfig
) => Promise<any>

export function useRequest(): ReqInstance {
  const instance = useCallback(
    async (
      payload: Payload,
      endpoint: string,
      requestConfig: RequestConfig
    ) => {
      const body = JSON.stringify(payload)
      const { href } = new URL(`api${endpoint}`, location.origin)

      const config = Object.assign(requestConfig, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })

      try {
        const response = await fetch(href, { ...config, body })
        if (!response.ok) {
          const { error } = await response.json()
          throw new Error(JSON.stringify({ error }))
        } else {
          return await response.json()
        }
      } catch (e) {
        console.error(e.message)
      }
    },
    []
  )

  return instance
}
