import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from 'styles/'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
