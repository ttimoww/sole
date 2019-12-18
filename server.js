const express = require('express')
const app = express()
const mysql = require('mysql')

// Database Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sole'
})



app.listen('9090', () => console.log('Server started on port : 9090'))
