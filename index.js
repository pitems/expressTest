const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//Iinit middleware
//app.use(logger); //This will log interaction on the server
app.use(express.json());
app.use(express.urlencoded({extended:false})) //Body Parser Middleware

app.use(express.static(path.join(__dirname,'public')));

//Members API Routes
app.use('/api/members',require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server Started on port ${PORT}`));