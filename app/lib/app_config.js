/**
 * Small universal util to load config.
 * to use simply: import config from 'lib/config'
 * Works both on client and server perfect for SSR
 */

export let config = {}
export let server_config = {}
export let browser_config = {}


if(process.browser){
    config = { ...window.__ENV_CONFIG__ }
    browser_config = config
} else {
    const getConfig = require('apprc')    
    server_config = getConfig({ browser: {}}, process.env.APP_CONFIG )
    config = server_config
}
export default config


export const ConfigScript = ({env_config})=><script dangerouslySetInnerHTML={{__html:`window.__ENV_CONFIG__ = ${JSON.stringify(env_config)}`}} />