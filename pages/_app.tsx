import '../styles/reset.scss'
import '../styles/global.scss'
import '../styles/variable.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
