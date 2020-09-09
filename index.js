const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.port || 9000
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const connection = mongoose.connection
connection.once('open', () => {
    console.log('mongo db connected')
})

app.route('/').get((req, res) => res.json("your first rest api "))
app.listen(port, () => {
    console.log(`your server is running ${port}`)
})