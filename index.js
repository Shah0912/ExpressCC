const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();


//Init middleware
app.use(logger);

//Handlebar middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//res.render -> Html template : pug,ejs
//res.send -> send text, html code
//res.sendfile -> Send file
//res.json -> send json


/* app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname,'public','index.html'));
}); */

//Homepage route
app.get('/',(req,res)=>{
    res.render('index',{
        title: 'Members App',
        members
    });
});



//static server : Dont need to route individually
//No need to write routes for each html file

//Set static folder
//After adding as static
//We can go to localhost:5000/about.html Without routing
//We can even add css files to static folder
//Use is used whenever we want to include middleware
app.use(express.static(path.join(__dirname,'public')));

//Members api route
app.use('/api/members', require('./routes/api/members'));



const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`));