require('dotenv').config()
const express = require("express");
const ejs=  require("ejs")
const path = require('path')
const DbConnect=require('./app/config/dbCon')



const app = express();  
DbConnect()
app.set('view engine', 'ejs');
app.set('views','views')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
//creatre a static folder
app.use(express.static('public'))   

app.set(path.join(__dirname, 'public'))
const homeRoute = require('./app/routes/homeRoute')

app.use(homeRoute)

const ApiRoute=require('./app/routes/apiRoute')
app.use('/api',ApiRoute)


const PORT=3009


app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });