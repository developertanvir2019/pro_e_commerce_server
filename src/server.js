const express = require('express');
const morgan = require('morgan')
const app = express();
app.use(morgan("dev"))

const isLoggedIn = (req, res, next) => {
    const login = true
    if (login) {
        next();
    } else {
        return res.status(401).json({ message: 'unauthorized user' })
    }

}
app.use(isLoggedIn)
app.get('/test', (req, res) => {
    res.status(200).send('server is running on pro e commerce')
})

app.get('/api/user', isLoggedIn, (req, res) => {
    res.status(200).send('server is running on pro e commerce')
})


app.listen(5000, () => console.log('Pro e-commerce server is running on port 5000'));