const express = require('express')
const Courses = require('../models/Courses')
const Events = require('../models/Events')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({ status: "server working" })
})


router.get('/courses', (req, res) => {
    Courses.find({}, function (err, data) {
        if (err)
            res.send({err, status:400})
        else
            res.send({ courses: data, status:200 })
    })
})

router.post('/course', (req, res) => {
    const course = new Courses(req.body)
    course.save()
    res.end()
})

router.get('/Events', (req, res) => {
    Events.find({}, function (err, data) {
        if (err)
            res.send({err, status:400})
        else
            res.send({ events: data, status:200 })
    })
})

router.post('/event', (req, res) => {
    const event = new Events(req.body)
    event.save()
    res.end()
})



module.exports = router