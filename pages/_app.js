import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import 'nprogress/nprogress.css'
import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

Router.onRouteChangeStart = (url) => {
  console.log(url)
  NProgress.start()
}
Router.onRouteChangeComplete = (url) => {
  NProgress.done()
}
Router.onRouteChangeError = (url) => {
  NProgress.done()
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      {/* <NextNProgress options={{ showSpinner: false }} /> */}
    </ThemeProvider>
  )
}
