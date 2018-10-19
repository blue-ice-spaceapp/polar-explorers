# `create-epi-app` Tool
A small tool that gets you started working on a ePI client app quickly. Based on [next.js](https://github.com/zeit/next.js)(React with SSR, webpack, es6,... ) with additional **batteries** that will help you get started even faster.

## Important Notes
If you plan to create a backend only app, this tool will not be of much use. There is no `create-epi-backend-app` yet, but you can check the [etv-view](https://github.com/etventure/epi-dashboard) repo for a possible way how to implement app with a backend.

 There is no custom way to authorize backend apps yet, you can however implement a google sign with offline access refresh token as explained here: `https://cloud.google.com/nodejs/getting-started/authenticate-users`

## Requirements
* [Node.js](https://nodejs.org/en/) 8
* [Yarn](https://yarnpkg.com/en/docs/install) 1.7


## Getting Started
* `git clone https://github.com/etventure/create-epi-app.git`
* `cd create-epi-app`
* `yarn install-tool`
* `cd ..`
* `create-epi-app my-new-epi-app`
* `cd my-new-epi-app`
* `yarn dev`
* start coding :)

## Included Batteries

 All glue code included, for example check `app/pages/index.js`

* [next.js](https://github.com/zeit/next.js) Comes with some utils already and most importantly **[EXAMPLES](https://github.com/zeit/next.js/tree/canary/examples)**
* [Material UI](#material-ui) A React UI framework that implements Material Design.
* [Styled Components](https://www.styled-components.com/) a es6 react styling solution. Because MUI JSS is less fun
* [Redux](https://redux.js.org/) Global state container with time travel.
* [Apollo react client](https://www.apollographql.com/docs/react/) a set of tools to make building graphql clients easy. check `app/pages/index.js` for example
* [Google auth via redux](#google-auth)
* [Epi access](#epi-access)
* [Simple Config](#simple-config)
* [Theme and style utils](#theme-and-style-utils)
* [Dockerfile](#Dockerfile)
* [Deployment](#deployment)
### Google auth
ePI uses google jwt to authenticate and authorize requests. Therefore every ePI consumer has to obtain a valid jwt from google. `create-epi-api` comes with a component that does that for you, using google's clientside js library and redux. 

All you have to do to for a page to be authenticated is to wrap it inside `<RequireAuth>`. But don't forget to inlude the `withRedux` wrapper. See example in `app/pages/index.js`

The apps comes with predefined google_id, that works only for localhost:3010, for production/staging use you should obtain your own google id, either by creating one on the google console or ask @aramisf, @igl or @matijagaspar to create one for you. 

You can set the client id in:  `.create-epi-apprc` > `browser` > `google_auth` > `params` > `client_id`

#### To access google profile info:

Example:
```jsx
import { connect } from 'react-redux'
import withRedux from '../lib/withRedux'
import applyWrappers from '../lib/applyWrappers'
import RequireAuth from '../components/organisms/RequireAuth'

const stateToProps = ({ google_api }) => ({
    user_full_name: google_api.google_user ? google_api.google_user.getBasicProfile().getName() : '',
})

const MyPage = ()=>(
    <RequireAuth>
        <h1>Hello, {user_full_name}</h1>
    </RequireAuth>
)

export default applyWrappers(withRedux)(MyPage)
```

#### Google auth redux states:

`script_status`: the status of the google javascript library.
* `script-loading`: library is being loaded from google
* `api-loading`: library is loaded, and is initializing the api
* `ready`: google javascript library is ready

`sign_in_satus`: status of the user sign in
* `initializing` loading sign in status from google
* `signed_in` user is signed in
* falsy user is not signed in
* `error` something went wrong

`google_user`: [GoogleUser](https://developers.google.com/identity/sign-in/web/reference#users) object. Not null when user is singed in.

### Google auth redux action creators:

`signInWithGoogle`: initializes the sign in process, accepts [options](https://developers.google.com/identity/sign-in/web/reference#googleauthsigninoptions) parameter
`signOutWithGoogle`: signs the user out

## ePI Access
Everything required to access the epi is included + example. For more information on the use of apollo check their [docs](https://www.apollographql.com/docs/react/)

### simple query example
```jsx
import withRedux from '../lib/withRedux'
import applyWrappers from '../lib/applyWrappers'
import withEpi from '../lib/withEpi'
import gql from 'graphql-tag'
import RequireAuth from '../components/organisms/RequireAuth'

const gqlQuery = gql`
    query sampleQuery {
        projects {
            id,
            name
        }
    }
`

const MyPage = ()=>(
    <RequireAuth>
      <Query query={ gqlQuery }>
        {({ loading, error, data }) => {
          // loading handling
          if (loading) { return <div>loading</div>}
          // error handling
          else if (error) { 
              return <div> error: {error} </div> 
          }
          // result handling
          else {
            return (
            <ul>
                <For each='item' of={ data.projects }>
                  <li>{item.name}</li>
                </For>
            </ul>)
          }
      </Query>
    </RequireAuth>
)

export default applyWrappers(withRedux, withEpi)(MyPage)
```

### Simple Config
Comes with a simple config tool developed by our very own @igl: https://www.npmjs.com/package/apprc

Config file is located in `./.<yourappname>rc`
It's a yaml file and its structure is very simple:

```yml
defaults:
    my_property: a
    browser:
        my_browser_prop: ba
 
development:
    my_property: b
    browser:
        my_browser_prop: bb
 
production:
    my_property: c
    browser:
        my_browser_prop: bc
```

The default envoirment selector is `APP_CONFIG` env var.

To access the property:
```jsx
import app_config from './app_config'

//only availible on serverside, will be null on browser
console.log(app_config.my_property) 

//availible on both broser and server
console.log(app_config.browser.my_browser_prop) 
```


### Theme and style utils
#### Theme
The availible theme tool is from material ui ([docs](https://material-ui.com/customization/themes/)), it comes witha [default theme](https://material-ui.com/customization/default-theme/) and you can override and add custom properties. The themefile is located in `app/style/mui_theme.js`. 

Additionally the same theme is also availible in the styled components like so:
```jsx
import styled from 'styled-components'
const MyComponent = styled`
    color: ${ ({ theme })=>theme.property }
`
```

#### Style utils

There are also couple of util scripts to help you out with styling the styled-components: 

* [unselectable](#unselectable)
* [clearfix](#clearfix)
* [breakpoint](#breakpoint)
* [themeColor](#themeColor)
* [typography](#typography)
* [capitalize](#capitalize)
* [gutter](#gutter)
* and everything from [polished](https://polished.js.org/)

#### `unselectable`:
Make the text unselectable

```jsx
import { unselectable } from '../style/helpers'
import styled from 'styled-components'

const UnselectableP = styled.p`
 ${unselectable}
`
```

#### `clearfix`:
fix clearing for floated components

```jsx
import { clearfix } from '../style/helpers'
import styled from 'styled-components'

const FloatContainer = styled.div`
 ${clearfix}
`
```

#### `breakpoint`:
A css media query helper for easier implementation of responsive design. The screen sizes are defined in the theme: `theme.breakpoints.values[size]`. Predefined sizes are: `xs`, `sm`, `md`, `lg`, `xl`


```jsx
import { breakpoint } from '../style/helpers'
import styled from 'styled-components'

const ResponsiveComponent = styled.div`
    width: 100%;
    @media ${ breakpoint('md') } {
        width: 50%;   
    }
`
```


#### `themeColor`:
A util to help you use material ui theme colors. the syntax is: `[color class].[color shade]`. The color will be selceted from theme: `theme.pallete.[color class].[color shade]`. if no shade is specified the `main` shade will be used.

```jsx
import { themeColor } from '../style/helpers'
import styled from 'styled-components'

const ColoredDiv = styled.div`
    background-color: ${themeColor('primary')};
    color: ${themeColor('primary.contrastText')};
`
```

#### `typography`

A util to help you use material ui theme typography. It selects from `theme.typography.[type].[property]`. Type is optional. But usually for text you should be using the `<Typography>` component from Material UI.

```jsx
import { typography } from '../style/helpers'
import styled from 'styled-components'

const themedText = styled.p`
    font-family: ${ typography('fontFamily') };
    font-size: ${ typography('fontFamily') };
`
```

#### `capitalize`

Captializes the text, not a `styled-component` util.

```jsx
import { capitalize } from '../style/helpers'
import styled from 'styled-components'

export default ({projects})=>(
    <For each='project' of='projects'>
        {capitalize(project.name)}<br/>
    </For>
)
```

#### `gutter`

A util to help you use themed gutter. Specify the property and multipler.


```jsx
import { gutter } from '../style/helpers'
import styled from 'styled-components'

const paddedDiv = styled.div`
    ${ gutter('padding', 1.5) }
`
```

#### Dockerfile
The created app comes with a ready to use dockerfile.
To build a docker image:
* `yarn build`
* `docker build .`
* `docker run -p 3010:3010 -e "APP_CONFIG=production" [BUILT_IMAGE]` the `APP_CONFIG` specifies the envoirment, see: [Simple Config](#simple-config)

#### Deployment

HA, Got you there! No easy production/staging deployment included. 

But don't be too sad, since it is planned for the future. 

Right now however you are on your own regarding how to host and deploy your app. You could in theory use [now](https://zeit.co/now) or heroku or w/e free service, don't worry about the ePI security, since it requires a google approved token anyway, but take care of any aditional secrets/passwords you hardcode in your app,  because some free services expose the source code.