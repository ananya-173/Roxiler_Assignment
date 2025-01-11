const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL;

const mongoConnect = () => {
    
    mongoose.connect(mongoURL)

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    })

    mongoose.connection.on('error', (err) => {
        console.log('Error while connecting to MongoDB:', err);
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    })

}

module.exports = mongoConnect;
