const http = require('http')
const fs = require('fs')
const os = require('os')
const json = [
    os.hostname(),
    os.platform(),
    os.arch(), 
    os.cpus().length, 
    os.uptime(),
    os.networkInterfaces()
    ];
const osJSON = JSON.stringify(json);

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
    } else if (urlPath === '/sys') {
        fs.writeFileSync('./osinfo.json', osJSON, () => {
            return;            
        })
    }
     else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        const error = fs.readFileSync('pages/404.html')
        res.end(error);
    }
})
server.listen(port, host, () => {
    console.log(`Server started at ${host}:${port}`)
})