
import { connect } from 'react-redux'
import styled from 'styled-components'

import { breakpoint, themeColor, gutter } from '../style/helpers'

import applyWrappers from '../lib/applyWrappers'
import withRedux from '../lib/withRedux'
import withMUI from '../lib/withMUI'
import { signOutWithGoogle } from '../lib/GoogleAuthRedux'
import Challange from '../components/atoms/Challange'
import Map from '../components/atoms/Map'

import Router from 'next/router'
import Footer from '../components/atoms/Footer'
import Make from '../components/pages/Make'
import Instructions from '../components/pages/Instructions'
import DotSpinner from '../components/atoms/DotSpinner'
import RequireAuth from '../components/organisms/RequireAuth'
import App from '../components/App'

import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import game from '../game'
// STYLED COMPONENTS
// sample using themecolor and breakpoint style utility
const MainTitle = styled(Toolbar)` 
    ${ ({ clickable }) => clickable ? 'cursor: pointer;' : '' }
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
    background-image:url('/static/mapBG2.png');
    display: flex;
    
    align-items: center;
    justify-content: center;
    background-size:cover;
    background-position: center;
    height: calc(100vh - 320px);
    vertical-align: center;
    &>a{
        display:flex;
        opacity:1;
        vertical-align: center;
        font-family: Paytone One, sans-serif;
        font-size:60px;
        color: #031c42;
        cursor: pointer;
        
        transition: all 0.2s ease-out;
        &:hover {
            
            transform: scale(1.3) translate(-1%,-1%);
        }
    }
`
class Index extends React.Component {
    state = {
        value: -1,
    };
    static getIntialProps ({ req, query, params }) {

    }
    handleChange = (event, value) => {
        this.setState({ value })
        Router.push('/?page=' + value)
    };

    render () {
        let { value } = this.state
        const { url: { query: { page } } } = this.props
        const parsedPage = parseInt(page, 10)

        value = 0
        return (
            <App>
                {/* <RequireAuth> */} {/* forces user login, check the source */}
                <MainAppBar position='static'>
                    <MainTitle clickable={ parsedPage !== null } onClick={ () => Router.push('/') }>
                        <img width='100px' src='/static/logo1.svg' />
                        <div>Polar explorers</div>
                    </MainTitle>
                    <NavBar>

                        <Tabs value={ parsedPage } onChange={ this.handleChange }>
                            <Tab label={ <TabLabel>Make</TabLabel> } />
                            <Tab label={ <TabLabel>Playing Instruction</TabLabel> } />
                        </Tabs>

                    </NavBar>
                </MainAppBar>

                <Choose>
                    <When condition={ parsedPage === 0 }>
                        <Content>
                            <Make />
                        </Content>
                    </When>
                    <When condition={ parsedPage === 1 }>
                        <Content>
                            <Instructions />
                        </Content>
                    </When>
                    <When condition={ parsedPage === 2 }>
                        Tab3
                    </When>
                    <Otherwise>
                        <FrontPageDiv>
                            <a href={ '/?page=0' }>Begin</a>
                        </FrontPageDiv>
                    </Otherwise>
                </Choose>

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
