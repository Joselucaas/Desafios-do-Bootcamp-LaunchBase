const express = require('express')
const route = express.Router()

route.get('/', function(req,res) {
    return res.redirect('/teachers')
})

route.get('/teachers', function(req,res) {
    return res.render('teachers')
})

route.get('/studants', function(req,res) {
    return res.send('alunos')
})

module.exports = route