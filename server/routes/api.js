const express = require('express');
const Courses = require('../models/Courses');
const SpaceCourses = require('../models/SpaceCourses');
const SpaceNews = require('../models/SpaceNews');
const Images = require('../models/Images');
const SpaceExperiments = require('../models/SpaceExperiments');
const News = require('../models/News');

const Experiments = require('../models/Experiments');
const Events = require('../models/Events');
const SpaceEvents  = require('../models/SpaceEvents');
const Contact = require('../models/ContactUs');
const router = express.Router();



const checkValidate = (body) => {
    const keys = Object.keys(body);
    //TODO
    //for (let i of keys)
        //res.body[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

    return body;
}

router.get('/', (req, res) => {
    res.send("server working");
})

router.post('/experiment', (req, res) => {
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const experiment = new Experiments(body);
    experiment.save();
    res.end();
});

router.get('/experiments', (req, res) => {
    Experiments.find({}, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ experiments: data, status: 200 });
    });
});

//Start Space Experiments
router.post('/space/experiment', (req, res) => {
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const experiment = new SpaceExperiments(body);
    experiment.save();
    res.end();
});

router.get('/space/experiments', (req, res) => {
    SpaceExperiments.find({}, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ experiments: data, status: 200 });
    });
});


//End Space Experiments

router.get('/courses', (req, res) => {
    Courses.find({}, function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ courses: data, status: 200 });
    });
});

router.post('/course', (req, res) => {
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const course = new Courses(body);
    course.save();
    res.end();
});


//Space Courses
router.get('/space/courses', (req, res) => {
    SpaceCourses.find({}, function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ courses: data, status: 200 });
    });
});

router.post('/space/course', (req, res) => {
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const course = new SpaceCourses(body);
    course.save();
    res.end();
});
//Space Courses

router.get('/events', (req, res) => {
    Events.find({}, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ events: data, status: 200 });
    });
});

router.post('/event', (req, res) => {
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const event = new Events(body);
    event.save();
    res.end();
});



//new Space Events
router.get('/space/events', (req, res) => {
    SpaceEvents.find({}, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ events: data, status: 200 });
    });
});

router.post('/space/event', (req, res) => {
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }
    body = checkValidate(req.body);
    const event = new SpaceEvents(body);
    event.save();
    res.end();
});
//End Space Events
router.get('/space/images/:id', (req, res) => {
    Images.find({ forWebsite: 's', category: req.params.id }, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ images: data, status: 200 });
    });
});

router.get('/tpoach/images/:id', (req, res) => {
    Images.find({ forWebsite: 't', category: req.params.id }, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ images: data, status: 200 });
    });
});

router.post('/image', (req, res) => {
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const image = new Images(body);
    image.save();
    res.end();
});

router.get('/imagesCategory/tpoach', async (req, res) => {
    const results = await Images.aggregate().match({ forWebsite: "t" }).group(
    {
        _id: '$category',
        imgUrl: { $first: "$img" },
        count: { $sum: 1 }
    });
    res.send({ categories: results });
});


router.get('/imagesCategory/space', async (req, res) => {
    const results = await Images.aggregate().match({ forWebsite: "s" }).group(
    {
        _id: '$category',
        imgUrl: { $first: "$img" },
        count: { $sum: 1 }
    });
    res.send({ categories: results });
});

router.post('/contactus', (req, res) => {
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const contact = new Contact(body);
    contact.save();
    res.end();
});

router.get('/space/news', (req,res)=>{
    SpaceNews.find({ sort:{
        date: 1 
    }}, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ experiments: data, status: 200 });
    });
})

router.post('/space/news', (req, res)=>{
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }
    body = checkValidate(req.body);
    const news = new SpaceNews(body);
    news.save();
    res.end();
})


router.get('/tpoach/news', (req,res)=>{
    News.find({ sort:{
        date: 1 
    }}, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ experiments: data, status: 200 });
    });
})

router.post('/tpoach/news', (req, res)=>{
    let body = req.body;
    if (!body) {
        res.send({ err: "data is missing" });
        return;
    }
    body = checkValidate(req.body);
    const news = new News(body);
    news.save();
    res.end();
})

module.exports = router;