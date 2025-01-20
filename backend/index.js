"use strict"

/*--------------------------------------*
Connectify
/*--------------------------------------*/

const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT
const HOST=process.env.HOST

/*--------------------------------------*/
require('express-async-errors')
/*--------------------------------------*/
app.use(express.json())
app.use(require('cors')())

/*--------------------------------------*/
//! Connect to MongoDB with Mongoose:
require('./src/configs/dbConnection')

/*--------------------------------------*/
//! Authentication
// app.use(require('./src/middlewares/authentication'))
/*--------------------------------------*/

//! Searching&Sorting&Pagination:
app.use(require('./src/middlewares/findSearchSortPage'))

/*--------------------------------------*/
//! Home Page

app.all('/', (req, res)=>{
    res.send({
        err:false,
        message:'Welcome to Chat APP',
    })
})


/*--------------------------------------*/
//! Routes:
app.use("admin", require('./src/roots/adminRoot'))

/*--------------------------------------*/
//! errorHandler:
app.use( require('./src/errorHandler'))


/*--------------------------------------*/
app.listen(PORT, ()=>console.log(`App is running: ${HOST}:${PORT} `))