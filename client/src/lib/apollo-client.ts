import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL

if (!graphqlUrl) {
  throw new Error('Missing NEXT_PUBLIC_GRAPHQL_URL')
}

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUrl,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      VPLVehicle: {
        keyFields: ['id'],
      },
      Company: {
        keyFields: ['id'],
      },
      Make: {
        keyFields: ['id'],
      },
      Model: {
        keyFields: ['id'],
      },
      Colors: {
        keyFields: ['id'],
      },

      Variant: {
        keyFields: false,
      },
    },
  }),
})