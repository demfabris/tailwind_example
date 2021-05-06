export const API_URL = 'http://localhost:3000'
export const DEV_URL = 'http://192.168.1.7:3000'

export const fetcher = async (endpoint: string) => {
  // const { href } = new URL(endpoint, API_URL)
  const { href } = new URL(`/api/${endpoint}`, DEV_URL)
  return fetch(href).then((res) => res.json())
}
