// const express=require('express')
// const mongoose=require('mongoose')
// const bodyParser=require('body-parser')
// const homeRoutes=require('./Routers/home')
// const port= process.env.port || 3000;
// const app=express();
// app.set('view engine','ejs')
// app.use('/',homeRoutes)
// mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true})
// const db=mongoose.connection;

// db.on('eror',()=>{
//     console.log('Database not connected');
// })

// db.once('open',()=>{
//     console.log('Database is connected');
// })



// app.listen(port);

const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const homeRoute=require('../Routers/home.js')
const port= process.env.port || 3000
const app=express();

//set view engine and use home Routes and public folder
app.set('view engine','ejs')
app.use(express.static('public'))
app.use('/',homeRoute);


// body parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//database connection information
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true});
const db=mongoose.connection;

db.on('eror',()=>{
    console.log('Databse is not connected');
})

db.once('open',()=>{
    console.log('Databse is connected')
})

app.listen(port);