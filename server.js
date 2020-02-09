const express = require('express')
const app = express()

// Sizes - POST
const postSize = require('./routes/size/post')
app.use('/api/size', postSize)

// Sizes - GET
const getSize = require('./routes/size/get')
app.use('/api/size', getSize)

// User - POST
const postUser = require('./routes/user/post')
app.use('/api/user', postUser)

// Items - GET
const getItems = require('./routes/item/get')
app.use('/api/item', getItems)

// Brands - GET
const getBrands = require('./routes/brand/get')
app.use('/api/brand', getBrands)

// Serve build version of client
app.use(express.static('./client/build'));

app.listen('9090', () => console.log('Server started on port : 9090'))
