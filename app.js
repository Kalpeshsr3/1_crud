/**this is our main file of student crud project */
require('dotenv').config()
const dbconnection = require('./db/connectdb');//db connection file
const path = require('path');//need path module to use its mtds
const sturoutes = require('./routes/studentRoutes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({extended:false}));//form se post kiya hua
//data ko req.body mai get karne ke liye .urlencoded()middleware ka
//use karte hai & extended:false means humko data string or object
//or array ke format mai milega & extended:true means data kisi bhi
//format mai milega so isiliye suggest karte hai extended:false use
//kare

//to use static files in our project we need static middleware
app.use(express.static(path.join(process.cwd(),"public")));

app.use('/',sturoutes);//load student Routes

app.set('view engine','ejs');//we need to mention which template 
//engine we are using in our project

app.listen(`${PORT}`,()=>{
    console.log('Server is running at 3000 port');
})