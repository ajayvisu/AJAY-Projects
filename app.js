//third party modulen
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const uuid = require('uuid');
require('dotenv/config');

//body-parser
app.use(express.json());

//third party middleware
app.use(morgan('dev'));

//router
const Carsrouter = require('./CarsRoute');
const { collection, db } = require('./CarsSchema');
app.use('/cars',Carsrouter);

//localhost
app.listen(7000,() => {
    console.log('Server Started On 7000');
});

//db server creation
//mongoose.set('useNewUrlParser',true);
//mongoose.set('useUnifiedTopology',true);
mongoose.connect(process.env.MYDB_CONNECION,(err) => {
    if(err){('db connection failed')}
    console.log('db connected sussfully')

})