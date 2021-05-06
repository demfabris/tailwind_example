export const API_URL = 'http://localhost:3000'
// export const DEV_URL = 'http://192.168.1.7:3000'

export const fetcher = async (endpoint: string) => {
  const { href } = new URL(`/api/${endpoint}`, API_URL)
  return fetch(href).then((res) => res.json())
}
