const mongoose = require('mongoose');

const URI = 'mongodb://fdsosa:popla2010@cv-web-shard-00-00-ndxbi.mongodb.net:27017,cv-web-shard-00-01-ndxbi.mongodb.net:27017,cv-web-shard-00-02-ndxbi.mongodb.net:27017/test?ssl=true&replicaSet=CV-Web-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;