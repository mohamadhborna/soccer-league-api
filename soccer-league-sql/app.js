const express = require('express')
const dotenv = require("dotenv")

const {setHeaders} = require('./middlewares/headers')
const db = require('./models/index')

//? load config
dotenv.config({path:'./config/conf.env'})

//? connect db 
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

const app = express()

//? Body Parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(setHeaders)

app.get('/' , (req , res) =>{res.json('welcome to soccer app')})

const port  = process.env.PORT
app.listen(port , () =>{console.log(`server is running on port ${port}`)})
