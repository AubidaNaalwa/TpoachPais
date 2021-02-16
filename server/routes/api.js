const express = require('express')
const Courses = require('../models/Courses')
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



module.exports = router