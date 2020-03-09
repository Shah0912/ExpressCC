const express = require('express');
const path = require('path');

const app = express();

//res.render -> Html template : pug,ejs
//res.send -> send text, html code
//res.sendfile -> Send file
//res.json -> send json

//static server : Dont need to route individually
//No need to write routes for each html file

/* app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname,'public','index.html'));
}); */

//Set static folder
//After adding as static
//We can go to localhost:5000/about.html Without routing
//We can even add css files to static folder
//Use is used whenever we want to include middleware
app.use(express.static(path.join(__dirname,'public')));


const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`));