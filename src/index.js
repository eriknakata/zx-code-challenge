import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql' })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render((
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ ApolloProvider>
    </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();