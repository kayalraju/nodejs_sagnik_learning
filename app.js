const express = require("express");
const ejs=  require("ejs")



const app = express();  

app.set('view engine', 'ejs');
app.set('views','views')

const homeRoute = require('./app/routes/homeRoute')

app.use(homeRoute)


const PORT=3009


app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });