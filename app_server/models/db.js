const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6';
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
    });
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
    });
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
    });