import UI from '../components/layout/ui'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import fetchJson from '../lib/fetchJson'

function MyApp({ Component, pageProps }: AppProps) {
  return <SWRConfig
  value={{
    fetcher: fetchJson,
    onError: (err) => {
      console.error(err)
    },
  }}
>
  <Component {...pageProps} />
</SWRConfig>
}

export default MyApp
