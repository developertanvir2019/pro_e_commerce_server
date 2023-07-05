const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const createError = require('http-errors')
const xssClean = require('xss-clean')
const rateLimit = require('express-rate-limit');
const userRouter = require('./routers/userRouter');


const app = express();

const rateLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 3,
    message: 'Too many request from this IP. Please try again later'
})
app.use(rateLimit())
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(xssClean());

app.use('/api/user', userRouter)






// error handle client
app.use((req, res, next) => {
    // res.status(404).json({ message: 'this route is not found' })
    next(createError(404, 'route is not found'))
})
// error handle server
app.use((err, req, res, next) => {
    return res.status(err.status || 5000).json({
        success: false,
        message: err.message,
    });
});

module.exports = app;