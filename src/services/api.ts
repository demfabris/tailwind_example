export const fetcher = async (endpoint: string) => {
  const { href } = new URL(
    `/api/${endpoint}`,
    location.origin || 'https://cashback-app-kappa.vercel.app/'
  )
  return fetch(href).then((res) => res.json())
}
