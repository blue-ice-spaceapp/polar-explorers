/**
 * Apollo and and redux provider
 * Every page root should be wrapped into this (if it needs to access epi or redux)
 */
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import initApollo from './initApollo'

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName (Component) {
    return Component.displayName || Component.name || 'Unknown'
}

export default ComposedComponent => {
    return class WithData extends React.Component {
    static displayName = `WithEpi(${ getComponentDisplayName(
        ComposedComponent
    ) })`
    constructor (props) {
        super(props)
        this.apollo = initApollo()// (this.props.serverState.apollo.data)

    }

    render () {
        return (
            <ApolloProvider client={ this.apollo } >
                <ComposedComponent { ...this.props } />
            </ApolloProvider>
        )
    }
    }
}
