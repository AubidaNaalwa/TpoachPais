const express = require('express');
const Courses = require('../models/Courses');
const Images = require('../models/Images');
const Events = require('../models/Events');
const router = express.Router();

router.get('/courses', (req, res) => {
    Courses.find({}, function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ courses: data, status: 200 });
    });
});

router.post('/course', (req, res) => {
    const course = new Courses(req.body);
    course.save();
    res.end();
});

router.get('/events', (req, res) => {
    Events.find({}, function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ events: data, status: 200 });
    });
});

router.post('/event', (req, res) => {
    const event = new Events(req.body);
    event.save();
    res.end();
});

router.get('/images/:id', (req, res) => {
    Images.find({ category:req.params.id }, function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ images: data, status:200 });
    });
});

router.post('/image', (req, res) => {
    const course = new Images(req.body);
    course.save();
    res.end();
});

module.exports = router;