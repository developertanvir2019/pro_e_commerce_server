const mongoose = require('mongoose');
const connectDB = async (options = {}) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, options)
        console.log('db connect success');
        mongoose.connection.on('error', (error) => {
            console.error('db connection error', error);
        })
    } catch (error) {
        console.log('could not connect db', error);
    }
}


module.exports = connectDB;