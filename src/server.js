require('dotenv').config()
const app = require('./app');
const port = process.env.SERVER_PORT
app.listen(port, () => console.log('Pro e-commerce server is running on port 5000')); 