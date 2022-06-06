const express = require('express')
const dotenv = require("dotenv")
const {setHeaders} = require('./middlewares/headers')

//? load config
dotenv.config({path:'./config/conf.env'})

const app = express()

//? Body Parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(setHeaders)

app.get('/' , (req , res) =>{res.json('welcome to soccer app')})

const port  = process.env.PORT
app.listen(port , () =>{console.log(`server is running on port ${port}`)})
