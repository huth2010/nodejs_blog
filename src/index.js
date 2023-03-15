const {engine}= require('express-handlebars');
const express = require('express')
const morgan=require('morgan')
var path=require('path')
const app = express()//instan
const port = 3000

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

app.get('/', (req, res) => {
 res.render('home');
});
app.get('/new', (req, res) => {
  res.render('new');
 });
 app.get('/search', (req, res) => {
  console.log(req.query);
  res.render('search');
 });
 app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('');
 });
// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});