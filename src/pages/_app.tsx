import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Mustache Barbearia</title>
        <link rel="shortcut icon" href="/img/mustache-barbearia.ico" />
        <link rel="apple-touch-icon" href="/img/mustache-barbearia.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="google-site-verification"
          content="J8eINfjTzqTb7Tk9Gz08fwHvRsP_SOyzWtasEgpSlVU"
        />
        <meta name="theme-color" content="#FAFAFA" />
        <meta name="description" content="Além do corte!" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
