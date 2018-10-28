const express = require('express')
const next = require('next')
const path = require('path')
const port = parseInt(process.env.PORT, 10) || 3010
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './app' })
const handle = app.getRequestHandler()
const fs = require('fs')
function requireHTTPS (req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    console.log(req.secure )
    console.log(req.get('x-forwarded-proto'))
    /* if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== 'development') {
        return res.redirect('https://' + req.get('host') + req.url)
    } */
    next()
}


const favico_files = fs.readdirSync(path.join(__dirname, 'app/favico'))


app.prepare()
    .then(() => {
        const server = express()
        // if (!dev) server.use(requireHTTPS)

        for (const favico_file of favico_files) {
            server.get(`/${ path.basename(favico_file) }`, (req, res) => {
                return res.sendFile(path.join(__dirname, 'app/favico', favico_file))
            })
        }
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${ port }`)
        })
    })
