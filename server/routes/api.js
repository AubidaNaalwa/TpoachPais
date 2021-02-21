const express = require('express');
const Courses = require('../models/Courses');
const Images = require('../models/Images');
const Experiments = require('../models/Experiments');
const Events = require('../models/Events');
const Contact = require('../models/ContactUs');
const axios = require('axios')

const router = express.Router();

const checkValidate = (body) => {
    // const keys = Object.keys(body)
    // for (let i of keys) {
    //     res.body[i].replace(/</g, '&lt;').replace(/"/g, '&quot;');
    // }
    return body
}

router.get('/', (req, res) => {
    res.send("server working");
})

router.get('/courses/id=:id', async (req, res) => {
    if (req.params.id) {
        await Courses.findById(req.params.id).exec(function (err, course) {
            if (err)
                res.send({ err, status: 400 });
            else
                res.send({ course, status: 200 });
        })
    } else {
        res.send({ err: "no id selected" });
    }
})

router.get('/experimentsCategory', async (req, res) => {
    const results = await Experiments.aggregate().group(
        {
            _id: '$category',
            imgUrl: { $first: "$defaultImg" }
        }
    )
    res.send({ categories: results });
});


router.post('/experiment', (req, res) => {
    let body = req.body
    if (!body) {
        res.send({ err: "data is missing" })
        return
    } else {
        body = checkValidate(req.body)
    }
    const experiment = new Experiments(body);
    experiment.save();
    res.end();
});

router.get('/experiments/category=:categoryName', (req, res) => {

    if(!req.params.category){
        res.send({err:"missing fields"})
        return
    }
    Experiments.find({category:req.params.category}, function (err, data) {
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
    let body = req.body
    if (!body) {
        res.send({ err: "data is missing" })
        return
    } else {
        body = checkValidate(req.body)
    }

    const course = new Courses(body);
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
    let body = req.body
    if (!body) {
        res.send({ err: "data is missing" })
        return
    } else {
        body = checkValidate(req.body)
    }
    const event = new Events(body);
    event.save();
    res.end();
});

router.get('/space1/images/:id', (req, res) => {
    Images.find({forWebsite:"s", category: req.params.id }, function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ images: data, status: 200 });
    });
});

router.get('/space2/images/:id', (req, res) => {
    Images.find({forWebsite:"s", name: req.params.id }, function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ images: data, status: 200 });
    });
});

router.get('/tpoach/images/:id', (req, res) => {
    Images.find({forWebsite:"t", category: req.params.id }, function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ images: data, status: 200 });
    });
});






router.post('/image', (req, res) => {
    let body = req.body
    if (!body) {
        res.send({ err: "data is missing" })
        return
    } else {
        body = checkValidate(req.body)
    }
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
        }
    )
    res.send({ categories: results });
});


router.get('/imagesCategory/space', async (req, res) => {
    const results = await Images.aggregate().match({ forWebsite: "s" }).group(
        {
            _id: '$category',
            imgUrl: { $first: "$img" },
            count: { $sum: 1 }
        }
    )
    res.send({ categories: results });
});

router.post('/contactus', (req, res) => {
    let body = req.body
    if (!body) {
        res.send({ err: "data is missing" })
        return
    } else {
        body = checkValidate(req.body)
    }
    const contact = new Contact(body);
    contact.save();
    res.end();
});



module.exports = router;