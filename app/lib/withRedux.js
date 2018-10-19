/**
 * Apollo and and redux provider
 * Every page root should be wrapped into this (if it needs to access epi or redux)
 */
import React from 'react'
import { Provider } from 'react-redux'
import initRedux from './initRedux'

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName (Component) {
    return Component.displayName || Component.name || 'Unknown'
}

export default ComposedComponent => {
    return class WithRedux extends React.Component {
    static displayName = `WithRedux(${ getComponentDisplayName(
        ComposedComponent
    ) })`
    constructor (props) {
        super(props)
        this.redux = initRedux({})

    }

    render () {
        return (
            <Provider store={ this.redux }>
                <ComposedComponent { ...this.props } />
            </Provider>
        )
    }
    }
}
