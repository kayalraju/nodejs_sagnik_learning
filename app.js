const express = require("express");
const ejs=  require("ejs")
const path = require('path')



const app = express();  

app.set('view engine', 'ejs');
app.set('views','views')
//creatre a static folder
app.use(express.static('public'))   

app.set(path.join(__dirname, 'public'))
const homeRoute = require('./app/routes/homeRoute')

app.use(homeRoute)


const PORT=3009


app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });