/**
 * Initializes apollo client, and sets up google id_token forwarding to epi.
 */
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'
import app_config from './app_config'
const { graphql_config } = app_config.browser

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
    global.fetch = fetch
}


// todo session and sign in?
// can't really do auth on serverside
let authLink = {
    concat: a => a,
}
if (process.browser) {
    authLink = setContext((_, { headers }) => {

        let token = ''
        // get the token from gapi if there is one
        if (window.gapi && window.gapi.auth2 && window.gapi.auth2.getAuthInstance) {
            const auth_instance = window.gapi.auth2.getAuthInstance()
            if (!auth_instance) return
            const currentUser = auth_instance.currentUser.get()
            if (!currentUser) return
            const authResp = currentUser.getAuthResponse()
            if (!authResp) return
            token = authResp.id_token
        }
        return {
            headers: {
                ...headers,
                credentials: 'include',
                authorization: token ? `Bearer ${ token }` : null,
            },
        }
    })
}


function create (initialState) {
    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
        link: authLink.concat(new HttpLink(graphql_config)),
        cache: new InMemoryCache().restore(initialState || {}),
    })
}


export default function initApollo (initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return create(initialState)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState)
    }

    return apolloClient
}
