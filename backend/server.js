require('dotenv').config()

// requiring express package
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// create express app
const app = express();

const port = 4000;

// middleware
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// app.use()
app.use('/api/workouts/',workoutRoutes);

// connect to the db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port', process.env.PORT)
    });
    })
    .catch((error) => {
        console.log(error);
    })



