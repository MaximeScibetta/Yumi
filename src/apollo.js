import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'https://eu1.prisma.sh/yumy/yumi/dev',

})


// Create the apollo client
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

// Install the vue plugin
Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})