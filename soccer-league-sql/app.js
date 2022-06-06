const express = require('express')
const dotenv = require("dotenv")

const {errorHandler} = require('./middlewares/error')
const {setHeaders} = require('./middlewares/headers')
const db = require('./models/index')

const playerRoutes = require('./routes/player.routes')

//? load config
dotenv.config({path:'./config/conf.env'})

//? connect db 
db.sequelize.sync()

const app = express()

//? Body Parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(setHeaders)

//? routes
app.use('/api/v1/players' , playerRoutes)

//? Error handler middleware
app.use(errorHandler)

//? listening and running port
const port  = process.env.PORT
app.listen(port , () =>{console.log(`server is running on port ${port}`)})
