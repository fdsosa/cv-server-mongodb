const express = require('express');
const cors = require('cors');
const app = express();

const env = process.env.ENV || 'DEV';

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3200);

// Middlewares    FIX!!
//app.use(cors({origin: 'http://localhost:4200'}));
app.use(cors({origin: 'https://proyect-cv-angular.herokuapp.com/'}));

app.use(express.json());

// Routes
app.use('/', require('./routes/contact.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
