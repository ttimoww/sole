const express = require('express')
const app = express()

const register = require('./routes/user/register')
app.use('/user', register)

app.listen('9090', () => console.log('Server started on port : 9090'))
