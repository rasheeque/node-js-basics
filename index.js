const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.port || 9000
mongoose.connect('mongodb://localhost:27017/AppDBs', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

});
const connection = mongoose.connection
connection.once('open', () => {
    console.log('mongo db connected')
})
const userRoute = require('./routes/users')
app.use(express.json())

app.use('/user', userRoute)
app.route('/').get((req, res) => res.json("your first rest api "))
app.listen(port, () => {
    console.log(`your server is running ${port}`)
})