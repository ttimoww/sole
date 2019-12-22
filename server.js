const express = require('express')
const app = express()

// Register User route
const registerUser = require('./routes/user/register')
app.use('api/user', registerUser)

// Login User route
const loginUser = require('./routes/user/login')
app.use('api/user', loginUser)

// Save Size route
const saveSize = require('./routes/size/save')
app.use('/api/size', saveSize)

// Get Item route
const findItem = require('./routes/item/find')
app.use('/api/item', findItem)

app.listen('9090', () => console.log('Server started on port : 9090'))
