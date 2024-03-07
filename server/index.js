// import express from 'express';
const express = require('express');
const app = new express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

const PORT = process.env.PORT || 8800;
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{

    app.listen(PORT,()=>{
        console.log(`Server is running on {PORT}`);
    })  

    // All Routes...
    app.use(express.json());
    app.use('/api/auth' , authRoute);
    app.use('/api/users' , userRoute);
    app.use('/api/movies' , movieRoute);
    app.use('/api/lists' , listRoute);

}).catch((e)=>{
    console.log("Server is not connected and not running properl "+ e)
})

// 30:41 minute last watch ...
// you was encrypting the password ...
// https://www.youtube.com/watch?v=tsNswx0nRKM  1:27 minute
// database collection URL =>
// https://cloud.mongodb.com/v2/65d77f078b92df14496b1fec#/metrics/replicaSet/65d77fa5ae1a8a0c167d338d/explorer/netflix/users/find