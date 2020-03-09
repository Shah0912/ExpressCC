const moment = require('moment');

//Middleware: req, res and next
//We have access to req, res So we can add any code
const logger = (req, res, next) =>{
    //Displays address and moment at which it is called
    console.log(`${req.protocol}://${req.get('host')}${req.url}: ${moment().format()} `);
    next();
}

module.exports = logger;