// require express
const express = require('express');
const Workout = require('../models/workoutModel')

const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


// require express router to routing
const router = express.Router();

// get all workouts
router.get('/', getWorkouts)


// GET a single workout
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// update a workout
router.patch('/:id', updateWorkout)


// export this module to use in server.js
module.exports = router;