"use strict"

/*--------------------------------------*
NODEJS EXPRESS | Erin's Restaurant
/*--------------------------------------*/

const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT
const HOST=process.env.HOST

/*--------------------------------------*/

app.use(express.json())
app.use(require('cors')())

/*--------------------------------------*/

//! Connect to MongoDB with Mongoose:
require('./src/configs/dbConnection')

/*--------------------------------------*/

//! Authentication
app.use(require('./src/middlewares/authentication'))

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
app.use("/admin", require('./src/roots/adminRoot')) // Login-Logout-Admin Roots
app.use("/token", require('./src/roots/tokenRoot'))
app.use("/reservation", require('./src/roots/reservationRoot'))

/*--------------------------------------*/

//! errorHandler:
app.use( require('./src/errorHandler'))

/*--------------------------------------*/
app.listen(PORT, ()=>console.log(`App is running: ${HOST}:${PORT} `))