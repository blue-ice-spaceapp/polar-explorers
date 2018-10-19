/**
 * initializes redux store:
 *     combines the gapiReducer and the reduxStore reduxers
 *     invokes initReduxGapi action creator at the begining.
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducers } from './reduxStore'
import { initReduxGapi, gapiReducer } from './GoogleAuthRedux'
import app_config from './app_config'


let reduxStore = null

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = f => f
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

function create (apollo, initialState = {}) {
    return createStore(
        combineReducers({ // Setup reducers
            ...gapiReducer,
            ...reducers,
        }),
        initialState, // Hydrate the store with server-side data
        compose(
            // Add additional middleware here
            applyMiddleware(thunkMiddleware),
            devtools
        )
    )

}


export default function initRedux (initialState) {
    // Make sure to create a new store for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return create(initialState)
    }

    // Reuse store on the client-side
    if (!reduxStore) {
        reduxStore = create(initialState)
    }

    if (process.browser) {
    // initialize gapi
        const google_auth_params = app_config.browser.google_auth.params
        reduxStore.dispatch(initReduxGapi(google_auth_params))
    }

    return reduxStore
}
