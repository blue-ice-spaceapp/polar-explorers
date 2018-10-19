const withFileLoader = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        distDir: 'build',
        webpack (config, options) {
            const { isServer } = options
            const webpack = require('webpack')
            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
                )
            }

            const assetPrefix = nextConfig.assetPrefix || ''
            const limit = nextConfig.inlineImageLimit || 8192
            /* config.module.rules.push(
                { 'test': /\.graphql$|\.flow$/, 'use': [{ 'loader': 'graphql-tag/loader' }] }
            ) */

            /* config.plugins.push(new webpack.ContextReplacementPlugin(
                /graphql-language-service-interface[\\/]dist$/,
                new RegExp(`^\\./.*\\.js$`)
            )) */

            config.module.rules.push({
                test: /\.(jpe?g|png|gif|svg|eot|otf|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit,
                            fallback: 'file-loader',
                            publicPath: `${ assetPrefix }/_next/static/images/`,
                            outputPath: `${ isServer ? '../' : '' }static/images/`,
                            name: '[name]-[hash].[ext]',
                        },
                    },
                ],
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        },
    })
}

module.exports = withFileLoader()
