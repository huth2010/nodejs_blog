const {engine}= require('express-handlebars');
const express = require('express')
const morgan=require('morgan')
var path=require('path')
const app = express()//instan
const port = 8000
const route=require('./routes')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//XMLHttpRequest, fech,axios ....
app.use(express.static(path.join(__dirname,'public')));
//http loger
//app.use(morgan('combined'))
// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\view'));



route(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});