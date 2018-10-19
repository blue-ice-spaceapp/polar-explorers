/**
 * Small util to handle google login with redux
 * Exports reducers and action creators
 *
 * For properly initialize initReduxGapi must be invoked once
 */
import { bindActionCreators } from 'redux'
import loadScript from 'load-script'
// import { create } from 'load-js'


// ACTIONS
// INTERNAL!
const internal_actions = {
    setScriptStatus: (payload) => ({
        type: 'GAPI_SET_SCRIPT_STATUS',
        payload,
    }),
    setAuthStatus: status => {
        let payload = status
        if ( typeof status === 'boolean') {
            payload = status ? 'signed_in' : false
        }
        return {
            type: 'GAPI_SET_AUTH_STATUS',
            payload,
        }
    },
    setUser: payload => ({
        type: 'GAPI_SET_USER',
        payload,
    }),
}


export const signInWithGoogle = (options = {}) => async (dispatch, getState) => {
    const { auth_status, script_status, sign_in_satus } = getState().google_api
    if (auth_status === 'initializing' || script_status !== 'ready' || sign_in_satus === 'signing_in') {
        // not yet initialized?
        return
    }
    try {
        dispatch({
            type: 'GAPI_SET_SIGN_IN_STATUS',
            payload: 'signing_in',
        })
        const auth_instance = window.gapi.auth2.getAuthInstance()
        await auth_instance.signIn({ ...options, prompt: 'select_account' })
        dispatch({
            type: 'GAPI_SET_SIGN_IN_STATUS',
            payload: null,
        })
    } catch (e) {
        // console.log(e)
        dispatch({
            type: 'GAPI_SET_SIGN_IN_STATUS',
            payload: `error: ${ e.error }`,
        })
    }
}
export const signOutWithGoogle = (options) => async (dispatch, getState) => { // eslint-disable-line no-unused-vars
    const { auth_status, script_status, sign_in_satus } = getState().google_api
    if (auth_status === 'initializing' || script_status !== 'ready' || sign_in_satus === 'signing_in' || sign_in_satus === 'signing_out') {
        // not yet initialized?
        // console.log('smth wong', { auth_status })
        return
    }
    try {
        dispatch({
            type: 'GAPI_SET_SIGN_IN_STATUS',
            payload: 'signing_out',
        })
        const auth_instance = window.gapi.auth2.getAuthInstance()
        await auth_instance.signOut()
        dispatch({
            type: 'GAPI_SET_SIGN_IN_STATUS',
            payload: null,
        })
    } catch (e) {
        // console.log(e)
        dispatch({
            type: 'GAPI_SET_SIGN_IN_STATUS',
            payload: `error: ${ e.message }`,
        })
    }
}


// INIT, saga would be nice to make this init an "Effect", same for signin?
export const initReduxGapi = params => (dispatch, getState) => {

    if (process.browser) {
        const { google_api } = getState()
        const actions = bindActionCreators(internal_actions, dispatch)
        if (google_api.script_status === null) {
            actions.setScriptStatus('script-loading')
            // loadScript('//apis.google.com/js/client:platform.js', function (err, script) {
            loadScript('https://apis.google.com/js/api.js', function (err, script) { // eslint-disable-line no-unused-vars
            // const loadJS = create()
            // loadJs({url:'//apis.google.com/js/api.js', async:true}).then(()=>{
                actions.setScriptStatus('api-loading')
                window.gapi.load('auth2', () => {
                    actions.setScriptStatus('ready')
                    actions.setAuthStatus('initializing')
                    window.gapi.auth2.init(params).then(

                        () => {
                            const authObject = window.gapi.auth2.getAuthInstance()
                            // const user = authObject.currentUser.get()
                            actions.setAuthStatus(authObject.isSignedIn.get())
                            actions.setUser(authObject.currentUser.get())
                            authObject.isSignedIn.listen(actions.setAuthStatus)
                            authObject.currentUser.listen(actions.setUser)
                        }
                    ).catch(e => {
                        actions.setAuthStatus(`error: ${ e.message }`)
                    })
                })
            })
        }
    }
}


// REDUCER
const google_api_initial = {
    script_status: null,
    auth_status: null,
    google_user: null,
    sign_in_satus: null,
}
export const gapiReducer = {
    google_api: (state = google_api_initial, { type, payload }) => {
        switch (type) {
        case 'GAPI_SET_SCRIPT_STATUS':
            return {
                ...state,
                script_status: payload,
            }
        case 'GAPI_SET_AUTH_STATUS':
            return {
                ...state,
                auth_status: payload,
            }
        case 'GAPI_SET_SIGN_IN_STATUS':
            return {
                ...state,
                sign_in_satus: payload,
            }
        case 'GAPI_SET_USER': {
            let google_user = null
            if (payload && typeof payload === 'object' && payload.isSignedIn()) {
                google_user = payload
            }
            return {
                ...state,
                google_user,
            }
        }
        default:
            return state
        }
    },
}
