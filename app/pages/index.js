import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import applyWrappers from '../lib/applyWrappers'
import withRedux from '../lib/withRedux'
import withMUI from '../lib/withMUI'
import { signOutWithGoogle } from '../lib/GoogleAuthRedux'

import { breakpoint, themeColor, gutter } from '../style/helpers'

import DotSpinner from '../components/atoms/DotSpinner'
import RequireAuth from '../components/organisms/RequireAuth'
import App from '../components/App'

// MUI Stuff
// https://material-ui.com/demos/
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'
import Button from '@material-ui/core/Button'

// GRQPHQL
// simple graphql query
const gqlQuery = gql`
    query sampleQuery {
        projects {
            id,
            name
        }
    }
`


// STYLED COMPONENTS
// sample using themecolor and breakpoint style utility
const Title = styled.div`
    font-size: 19px;   
    color: ${ themeColor('primary.contrastText') };
    flex-grow: 1;
    @media ${ breakpoint('sm') } {
        font-size: 24px;   
    }
`

// sample using gutter utility
const Content = styled.div`
${ gutter('padding', 2) };
`


// REDUX CONNECT
// redux connect function, maps a redux state to properties
const stateToProps = ({ google_api }) => ({
    user_full_name: google_api.google_user ? google_api.google_user.getBasicProfile().getName() : '',
})
const actionsToProps = {
    signOut: signOutWithGoogle,
}
// const actionsToProps =


import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ExitIcon from '@material-ui/icons/ExitToApp'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'
// Main index page component
const Index = ({ user_full_name, signOut }) => (
    <App>
        {/* <RequireAuth> */} {/* forces user login, check the source */}
        <AppBar position='static'>
            <Toolbar>
                <Title> Hello, blue ajs!</Title>

            </Toolbar>
        </AppBar>
        <Content>

        </Content>
        {/* </RequireAuth> */}
    </App>
)

/* <IconButton color='inherit' size='small'>
                    <ExitIcon onClick={ signOut } />
                </IconButton>
                */
// applies various wrappers to the component before exporting it
export default applyWrappers(
    withRedux, // attaches redux
    withMUI, // attaches material UI stuff (theme, styles etc...)
    connect(stateToProps, actionsToProps) // attaches the stateToProps function
)(Index)
