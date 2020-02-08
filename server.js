const express = require('express')
const app = express()

// Register User route
const registerUser = require('./routes/user/register')
app.use('/api/user', registerUser)

// Login User route
const loginUser = require('./routes/user/login')
app.use('/api/user', loginUser)

// Save Size route
const saveSize = require('./routes/size/save')
app.use('/api/size', saveSize)

// Get Item route
const getItem = require('./routes/item/get')
app.use('/api/item', getItem)

// Get all homepage items
const getHomepageItem = require('./routes/item/homepage')
app.use('/api/item', getHomepageItem)

// Serve build version of client
app.use(express.static('./client/build'));

app.listen('9090', () => console.log('Server started on port : 9090'))
