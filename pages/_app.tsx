import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '@biconomy/web3-auth/dist/src/style.css'

const Web3AuthProvider = dynamic(
  () =>
    import('../contexts/social-login-context').then(
      (res) => res.Web3AuthProvider
    ),
  { ssr: false }
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3AuthProvider>
      <Component {...pageProps} />
    </Web3AuthProvider>
  )
}
