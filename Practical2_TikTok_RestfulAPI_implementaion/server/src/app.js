const express = require('express');
const cocrs = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Import Routes
const videoRoutes = require('./routes/videoRoutes');
const userRoutes = require('./routes/users')
const commentRoutes = require('./routes/comments')

//initialize Express app 
const app = express();

//Middleware
app.use(morgan('dev'));//logging
app.use(cocrs());//enable CORS for all routes
app.use(bodyParser.json());//parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));//parse URL-encoded bodies

app.use ((req,res,next)=> {
    //check if the client accepts JSON
    if (req.accepts('json')) {
        next();
    } else {
        res.status(406).json({ error: 'Not Acceptable. This API only supports JSON responses.' });
    }
});