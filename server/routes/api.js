const express = require('express');
const Courses = require('../models/Courses');
const Images = require('../models/Images');
const Experiments = require('../models/Experiments');
const Events = require('../models/Events');
const router = express.Router();


router.get('/courses/:id?',async  (req, res) => {
    if (req.params.id) {
        await Courses.findById(req.params.id).exec(function (err, course) {
            if (err)
                res.send({ err, status: 400 });
            else
                res.send({ course, status: 200 });
        })
    }})



    router.post('/experiment', (req, res) => {
        const experiment = new Experiments(req.body);
        experiment.save();
        res.end();
    });

    router.get('/experiments', (req, res) => {
        Experiments.find({}, function (err, data) {
            if (err)
                res.send({ err, status: 400 });
            else
                res.send({ experiments: data, status: 200 });
        });
    });

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
        Images.find({ category: req.params.id }, function (err, data) {
            if (err)
                res.send({ err, status: 400 });
            else
                res.send({ images: data, status: 200 });
        });
    });

    router.post('/image', (req, res) => {
        const image = new Images(req.body);
        image.save();
        res.end();
    });

    router.get('/imagesCategory', async (req, res) => {
        const results = await Images.aggregate().group(
            {
                _id: '$category'
            }
        )
        res.send({ categories: results });
    });

    module.exports = router;