const http = require('http')
const fs = require('fs')

const host = '127.0.0.1'
const port = 5000

const server = http.createServer((req, res) => {
    const urlPath = req.url
    if (urlPath === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        const home = fs.readFileSync('pages/index.html')
        res.end(home)
    } else if (urlPath === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        const about = fs.readFileSync('pages/about.html')
        res.end(about)
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        const error = fs.readFileSync('pages/404.html')
        res.end(error);
    }
})

server.listen(port, host, () => {
    console.log(`Server started at ${host}:${port}`)
})