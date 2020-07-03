const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const dados = require('./data') // Pegando o script data.js

// Pegando o CSS
server.use(express.static("publics"))

// Pegando HTML
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})
 
// Trazando o front-end do site para o servidor
server.get('/', function(req, res) {
    const date = {
        title: "Rocketseat",
        image: "/img/rckt.jpg",
        description: "Nós somos a Rocketseat, uma empresa localizada no sul do Brasil, em Santa Catarina. Voltada para o ensino de tecnologias para Dev's de qualquer nível. Mas além de ensinar, nós o preparamos para o mercado de trabalho, com todos os desafios e tecnologias do atual mercado através dos bootcamp's GoStack e LaunchBase. Abaixo algumas das tecnologias que ensinamos em nossos Bootcamp's.",
        techs: [
            {name: "JavaScript"},
            {name: "-"},
            {name: "HTML"},
            {name: "-"},
            {name: "CSS"},
            {name: "-"},
            {name: "NodeJs"},
            {name: "-"},
            {name: "React Native"}
        ],
        network: [
            {name: "GitHub", link: "https://github.com/Rocketseat"},
            {name: "Instagram", link: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Facebook", link: "https://www.facebook.com/rocketseat"}
        ]
    }
    return res.render("about", {date})
})

server.get('/courses', function(req, res) {
    return res.render("courses", { items: dados}) // Passsando o data.js do back para o front-end
})

server.get("/bootcamps", function (req, res) {
    const id = req.query.id
    const dado = dados.find(function(dado){
       if (dado.id == id) {
           return true
       }
    })

    if (!dado) {
        return res.render("not-found")
    }
   
    return res.render('bootcamps', {item: dado})
   
  
  })

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

// ----------------------------------------

// Porta em que se enocntra o site
server.listen(2001, function() {
    console.log("Server is running")
})