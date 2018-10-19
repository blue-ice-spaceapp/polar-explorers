import Reddirect from '../../components/atoms/Reddirect'
import _MButton from '@material-ui/core/Button'
import styled from 'styled-components'
import { connect } from 'react-redux'
import DotSpinner from '../../components/atoms/DotSpinner'
import React, { Fragment } from 'react'
import { signInWithGoogle, signOutWithGoogle } from '../../lib/GoogleAuthRedux'
import { bindActionCreators } from 'redux'

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: bindActionCreators(signInWithGoogle, dispatch),
        signOut: bindActionCreators(signOutWithGoogle, dispatch),
    }
}


const MButton = styled(_MButton)`
    

`


const mapStateToProps = ({ google_api }, props) => {
    const isApiReady = google_api.auth_status !== null && google_api.auth_status !== 'initializing'
    const isSignedIn = google_api.auth_status === 'signed_in'
    return {
        isSignedIn,
        isApiReady,
        // reddirectHome: isApiReady && !isSignedIn && !(props.path && props.path === '/'),
    }
}
const LoadingBox = styled.div`

    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate3d(-50%,-50%,0);
    text-align: center;
`
/* <Reddirect to='/' condition={ props.reddirectHome } /> */
export default connect(mapStateToProps, mapDispatchToProps)( // should be inside a component with redux provicder!
    props => {
        return (
            <Fragment>
                <LoadingBox>
                    <DotSpinner hide={ props.isApiReady } />

                    <If condition={ props.isApiReady && !props.isSignedIn }>
                        <MButton size='large' color='primary' variant='raised' onClick={ () => props.signIn() } >Sign in</MButton>
                    </If>
                </LoadingBox>
                <If condition={ props.isSignedIn }>
                    {props.children}
                </If>
            </Fragment>
        )}
)
