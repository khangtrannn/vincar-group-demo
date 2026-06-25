import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client/react'

import { Provider } from '@/components/ui/provider'
import { apolloClient } from '@/lib/apollo-client'
import { AppHeader } from '@/components/layout/AppHeader'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ApolloProvider client={apolloClient}>
        <AppHeader />
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}