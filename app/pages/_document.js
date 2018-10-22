import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import app_config, { ConfigScript } from '../lib/app_config'
import JssProvider from 'react-jss/lib/JssProvider'
import getMUIPageContext from '../lib/getMUIPageContext'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps = ({ renderPage }) => {

      // styled-components init
      const sheet = new ServerStyleSheet()
      // mui init
      const muiPageContext = getMUIPageContext()

      const page = renderPage(App => props => sheet.collectStyles(
          <JssProvider
              registry={ muiPageContext.sheetsRegistry }
              generateClassName={ muiPageContext.generateClassName }
          >
              <App muiPageContext={ muiPageContext } { ...props } />
          </JssProvider>
      ))
      const styleTags = sheet.getStyleElement()

      const styles = (
          <React.Fragment>
              <style
                  id='jss-server-side'
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: muiPageContext.sheetsRegistry.toString() }}
              />
              {flush() || null}
          </React.Fragment>
      )

      return { ...page, muiPageContext, styleTags, styles, env_config: { browser: app_config.browser } }
  }
  render () {

      const { muiPageContext } = this.props
      return (
          <html>
              <Head>
                  <ConfigScript env_config={ this.props.env_config } />
                  <title>Polar Explorers</title>
                  <meta charSet='utf-8' />
                  <meta
                      name='viewport'
                      content={
                          'user-scalable=0, initial-scale=1, ' +
                'minimum-scale=1, width=device-width, height=device-height'
                      }
                  />


                  <link
                      rel='stylesheet'
                      href='https://fonts.googleapis.com/css?family=Roboto:300,400,700'
                  />
                  <link href='https://fonts.googleapis.com/css?family=Paytone+One' rel='stylesheet' />
                  {/* PWA primary color */}
                  <meta name='theme-color' content={ muiPageContext.theme.palette.primary.main } />

                  {this.props.styleTags}
              </Head>
              <body>
                  <Main />
                  <NextScript />
              </body>
          </html>
      )
  }
}
// GA for later, not safe right now: lack of opt-in
/* <script async src='https://www.googletagmanager.com/gtag/js?id=UA-77664268-2'></script>
                  <script dangerouslySetInnerHTML={{ __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments)}
                    gtag('js', new Date());
                    gtag('config', 'UA-77664268-2',  { 'anonymize_ip': true, 'storage': 'none' });` }}
                  />
*/
