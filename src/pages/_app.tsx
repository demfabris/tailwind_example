import { AppProps } from 'next/app'
import 'styles/globals.css'
import { useAuth } from 'hooks'

const App = ({ Component, pageProps }: AppProps) => {
  // auth watcher
  useAuth()

  return <Component {...pageProps} />
}

export default App
