import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client/react'

import { Provider } from '@/components/ui/provider'
import { apolloClient } from '@/lib/apollo-client'
import { AppShell } from '@/components/layout/AppShell'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ApolloProvider client={apolloClient}>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </ApolloProvider>
    </Provider>
  )
}