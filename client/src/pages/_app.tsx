import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client/react'

import { Provider } from '@/components/ui/provider'
import { apolloClient } from '@/lib/apollo-client'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}