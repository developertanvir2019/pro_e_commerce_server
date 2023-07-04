const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/test', (req, res) => {
    res.status(200).send('server is running on pro e commerce')
})

app.get('/api/user', (req, res) => {
    res.status(200).send('server is running on pro e commerce')
})

// error handle client
app.use((req, res, next) => {
    res.status(404).json({ message: 'this route is not found' })
    next()
})
// error handle server
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ message: 'something break' })
})

module.exports = app;