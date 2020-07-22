const express = require('express')
const nunjucks = require('nunjucks')
const route = require("./route.js")

const server = express()

// Pegando o CSS
server.use(express.static("public"))
server.use(route)

// Pegando HTML
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

// Porta do servidor em que está o site
server.listen(2000, function() {
    console.log("Server is running")
})