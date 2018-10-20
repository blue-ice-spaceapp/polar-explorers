import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import game from '../game'
import applyWrappers from '../lib/applyWrappers'
import withRedux from '../lib/withRedux'
import withMUI from '../lib/withMUI'
import { signOutWithGoogle } from '../lib/GoogleAuthRedux'
import Challange from '../components/atoms/Challange'
import Map from '../components/atoms/Map'
import { breakpoint, themeColor, gutter } from '../style/helpers'
import Footer from '../components/atoms/Footer'
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
import Title1 from '../components/atoms/Title1'
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ExitIcon from '@material-ui/icons/ExitToApp'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// STYLED COMPONENTS
// sample using themecolor and breakpoint style utility
const MainTitle = styled(Toolbar)` 
    &>img{
        margin-bottom: -24px;
    }
    & > div{
        color: ${ themeColor('primary.contrastText') };
        flex-grow: 1;
        font-family: Paytone One, sans-serif;
        font-size: 24px;
        max-width: 100px;
        line-height:20px;
        color: #031c42;

        margin-left: 17px;
        @media ${ breakpoint('sm') } {
            font-size: 43px;   
            max-width: 300px;
            line-height:32px;
        }
    }
    ${ gutter('margin-bottom', 1) };
`


// sample using gutter utility
const Content = styled.div`
${ gutter('padding', 3) };
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

const TabLabel = styled.span`
    font-size: 20px;
`


import PrintCard from '../components/atoms/PrintCard'
const MainAppBar = styled(AppBar)`
    padding-top: 24px;
    background-color: white !important;
    font-weight: 700;
`
const NavBar = styled(Toolbar)`
    background-color: ${ themeColor('primary') };
`
// <div>Icons made by <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// Main index page component

const FrontPageDiv = styled.div`
    background-image:url('/static/Antarticaaaaa.svg');
    margin: -40px;
    background-size:cover;
    background-position: center;
    height: calc(100vh - 128px);
`
class Index extends React.Component {
    state = {
        value: -1,
    };
    handleChange = (event, value) => {
        this.setState({ value })
    };

    render () {
        let { value } = this.state
        value = 0
        return (
            <App>
                {/* <RequireAuth> */} {/* forces user login, check the source */}
                <MainAppBar position='static'>
                    <MainTitle>
                        <img width='100px' src='/static/logo1.svg' />
                        <div>Polar explorers</div>
                    </MainTitle>
                    <NavBar>

                        <Tabs value={ value } onChange={ this.handleChange }>
                            <Tab label={ <TabLabel>Make</TabLabel> } />
                            <Tab label={ <TabLabel>Learn</TabLabel> } />
                            <Tab label={ <TabLabel>Play</TabLabel> } />
                        </Tabs>

                    </NavBar>
                </MainAppBar>
                <Content>
                    <Choose>
                        <When condition={ value === 0 }>
                            <Title1>Print</Title1>
                            <Grid container justify='center' spacing={ 32 }>
                                <PrintCard type='map' />

                                <PrintCard type='character cards' optional />

                                <PrintCard type='character tokens' />

                                <PrintCard type='equipment cards' />
                                <PrintCard type='challange cards' />
                                <PrintCard type='lotery tokens' />
                            </Grid>
                            <Title1>Cut</Title1>
                            <ul>
                                <li>4 character cards</li>
                                <li>4 character tokens</li>
                                <li>30 challange cards</li>
                                <li>12 challange cards</li>
                                <li>12 lotery tokens</li>

                            </ul>

                            <Title1>Additinal things</Title1>
                            <ul>
                                <li>2 dice</li>
                                <li>30 markers/stones for completed questes</li>
                                <li>30 markers/stones for melted ice fragmetns</li>
                            </ul>
                        </When>
                        <When condition={ value === 1 }>
                        Tab2
                        </When>
                        <When condition={ value === 2 }>
                        Tab3
                        </When>
                        <Otherwise>
                            <FrontPageDiv>
                                <Map />
                                <Challange />
                            </FrontPageDiv>
                        </Otherwise>
                    </Choose>

                </Content>
                <Footer>
                    <div>Icons made by <a href='https://www.flaticon.com/authors/smashicons' title='Smashicons'>Smashicons</a>, <a href='https://www.flaticon.com/authors/pixel-buddha' title='Pixel Buddha'>Pixel Buddha</a> and  <a href='http://www.freepik.com/' title='Freepik'>Freepik</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a> is licensed by <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank'>CC 3.0 BY</a>, everything else by Team Ice</div>
                </Footer>
                {/* </RequireAuth> */}
            </App>
        )
    }
}

/*
character tokens
character cards

12 eq card

30 challange cards

playing board

42 fragments melted ice
*
/
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
