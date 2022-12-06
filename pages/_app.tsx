import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ValueProvider } from '../context/useSpinValue'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ValueProvider>
        <Component {...pageProps} />
      </ValueProvider>
    </>
  )
}
