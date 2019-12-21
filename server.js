const express = require('express')
const app = express()

// Register route
const register = require('./routes/user/register')
app.use('/user', register)

// Login route
const login = require('./routes/user/login')
app.use('/user', login)

app.listen('9090', () => console.log('Server started on port : 9090'))
