export const API_URL = 'http://localhost:8080'
export const DEV_URL = 'http://192.168.1.7:8080'

export const fetcher = async (endpoint: string) => {
  const { href } = new URL(endpoint, DEV_URL)
  return fetch(href).then((res) => res.json())
}
