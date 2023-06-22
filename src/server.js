const express = require('express');
const morgan = require('morgan')
const app = express();
app.use(morgan("dev"))
app.get('/', (req, res) => {
    res.send('server is running on pro e commerce')
})


app.listen(5000, () => console.log('Pro server is running on port 5000'));