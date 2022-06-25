const express = require('express');
const hbs = require('hbs');

//set up express and view engine
let app = express()
app.set('view engine', 'hbs');
//setup static folder
app.use(express.static('public'))

//Routes
app.get('/', function(req,res){
    res.render('index.hbs')
})

app.get('/hello/:name', function(req,res){
    let name = req.params.name;
    res.render ('hello', {
        'firstName': name
    })
})

//run server
app.listen(3000, ()=>{
    console.log("Server started")
})

