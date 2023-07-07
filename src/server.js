require('dotenv').config()
const app = require('./app');
const connectDB = require('./config/db');
const port = process.env.SERVER_PORT

app.listen(port, async () => {
    console.log('Pro e-commerce server is running on port 5000');
    await connectDB()
}); 