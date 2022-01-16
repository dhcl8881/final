import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client"
import { getMainDefinition } from "@apollo/client/utilities"
import { WebSocketLink } from "@apollo/client/link/ws"
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
})

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/'
})

const link = ApolloLink.from([errorLink, httpLink]);
  
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:5000/',
  options: { reconnect: true }
})
  
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  link,
)
  
export default new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})