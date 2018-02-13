import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { inMemoryCache, InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjdko4wfb0jrm0194c68pal2l'
})

const client = new ApolloClient({
  link: httpLink,
  cahe: new InMemoryCache()
})