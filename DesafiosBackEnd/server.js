const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// Pegando o CSS
server.use(express.static("publics"))

// Pegando HTML
server.set("view engine", "njk")

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

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

// ----------------------------------------

// Porta em que se enocntra o site
server.listen(2001, function() {
    console.log("Server is running")
})