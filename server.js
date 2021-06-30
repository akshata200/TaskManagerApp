const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./server/database/connection')

const app = express();
// parser
app.use(express.urlencoded({
    extended: true
}));

dotenv.config({
    path: 'config.env'
})
const port = process.env.PORT || 8080;

// assets path
app.set('view engine', 'ejs');

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.use(morgan('tiny'));
connectDB();
app.use('/', require('./server/routes/router'));

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`);
})