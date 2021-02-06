const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const { title } = require('process');
const members = require('./Members');
const app = express();

//Iinit middleware
//app.use(logger); //This will log interaction on the server

//HandleBars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:false})) //Body Parser Middleware

//HomePage Route
app.get('/',(req,res)=> res.render('index',{title:"Members App",members}));

app.get('/about',(req,res)=> res.render('about',{title:"About Member"}));

app.get('/form',(req,res)=> res.render('form',{title:"Form Members",members}));
//Static Folder
app.use(express.static(path.join(__dirname,'public')));

//Members API Routes
app.use('/api/members',require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server Started on port ${PORT}`));