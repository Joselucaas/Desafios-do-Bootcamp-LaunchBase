const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// // Pegando o CSS
server.use(express.static("/publics"))

// Pegando HTML
server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})
 
// Trazando o front-end do site para o servidor
server.get('/', function(req, res) {
    return res.render("about")
})

server.get('/courses', function(req, res) {
    return res.render("courses")
})

// ----------------------------------------

server.listen(5000, function() {
    console.log("Server is running")
})