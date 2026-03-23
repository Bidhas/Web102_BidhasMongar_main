const express = require('express');
const dotev = require ('dotenv')
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require ('path');

//load env vars
dotenv.config();

const app = express();

//MIdlleware 
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use (require('./middleware/formatResponse'));

//Routes (to be defined later)
app.use(express.static('public'));
app.get('/api-docs', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));
app.use('/likes', require('./routes/likes'));
app.use('/follows', require('./routes/follows'));

//basic route
app.get('/', (req, res) => {
    res.json({message: 'Welcome to the Social Media API'});
});

//ERROR handler middleware (to be defined later)
app.use(require('./middleware/errorHandler'));

const PORT = process.env.PORT || 3000;

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running in development mode on port ${PORT}`);
});

//Handle unhandeled promis rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    process.exit(1);
});

app.use (require('./middleware/formatResponse'));    