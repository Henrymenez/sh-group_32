// const http = require('http')
// const fs = require('fs')

// const host = '127.0.0.1'
// const port = 5000

// const server = http.createServer((req, res) => {
//     const urlPath = req.url
//     if (urlPath === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' })
//         res.end('Home page')
//     } else if (urlPath === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         const about = fs.readFileSync('pages/about.html')
//         res.end(about)

//     }

// })

// server.listen(port, host, () => {
//     console.log(`sever started at port: ${port}`)
// })