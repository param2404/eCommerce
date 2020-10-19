const path = require('path')
const connectDb=require('./server/config/db')
require('colors')
require('dotenv').config(path.resolve(process.cwd(), './.env'));
const express=require('express')
const port = process.env.PORT
const cors = require('cors');


/////Data/////
const seeder= require('./server/seeder/index')


connectDb()

const app = express()
app.use(express.json({ limit: "20mb" }))
app.use(express.urlencoded({ extended: true }))
require('./routes')(app)
const server = require('http').createServer(app)
app.use(cors());

app.use(seeder)



server.listen(port, () => {
    console.log(`Server is running on port ${port}`.green.underline)
})

exports = module.exports = app;