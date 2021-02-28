const express = require('express'),
{ isValidFullName, isValidEmail, isValidMessage } = require('../../src/Constants'),
Courses = require('../models/Courses'),
Images = require('../models/Images'),
Videos = require('../models/Videos'),
Experiments = require('../models/Experiments'),
Events = require('../models/Events'),
Contact = require('../models/ContactUs'),
router = express.Router(),
AdminUser = process.env.REACT_APP_ADMIN,
AdminPass = process.env.REACT_APP_PASS;
let isLoggedIn = true;

router.post('/login', (req, res)=> {
    const body = clearBadChars(req.body);

    if (body && AdminUser === req.body.username && AdminPass === req.body.password)
        //TODO
        isLoggedIn = true;

    res.send(isLoggedIn);
});

router.post('/logout', (req, res)=> {
    isLoggedIn = false;
    res.sendStatus(200);
});

const clearBadChars = (body) => {
    const keys = Object.keys(body);
    keys.forEach((key) => body[key] = body[key].replace(/<|>|`/g, '').trim());
    return body;
}

router.get('/tpais/experiments', (req, res) => {
    Experiments.find({ forWebsite: 't' }, [], {sort:{date: -1}}, function(err, data) {
        if (err)
            res.send(err.message);
        else
            res.send({ experiments: data });
    });
});

router.post('/tpais/experiments/new', (req, res) => {
    const body = clearBadChars(req.body);

    if (!body || !isLoggedIn) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    const experiment = new Experiments(body);
    experiment.save();
});

router.put('/tpais/experiments/update/:id', (req, res)=>{
    if (!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Experiments.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.delete('/tpais/experiments/delete/:id', (req, res)=> {
    if(!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Experiments.findByIdAndDelete(req.params.id, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.get('/space/experiments', (req, res) => {
    Experiments.find({ forWebsite: 's' }, [], {sort: {date: -1}}, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send({ experiments: result });
    });
});

router.post('/space/experiments/new', (req, res) => {
    const body = clearBadChars(req.body);
    if (!body || !isLoggedIn) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    const experiment = new Experiments(body);
    experiment.save();
});

router.put('/space/experiments/update/:id', (req, res)=> {
    if (!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Experiments.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.delete('/space/experiments/delete/:id', (req, res)=>{
    if(!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Experiments.findByIdAndDelete(req.params.id, function(err, result) {
        if (err)
            res.send(err);
        else
            res.send(result);
    });
});

router.get('/tpais/courses', (req, res) => {
    Courses.find({ forWebsite: 't' }, [], {sort: {date: -1}}, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send({ courses: result });
    });
});

router.post('/tpais/courses/new', (req, res) => {
    const body = clearBadChars(req.body);
    if (!body || !isLoggedIn) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    const course = new Courses(body);
    course.save();
    res.sendStatus(200);
});

router.put('/tpais/course/update/:id', (req, res)=> {
    if (!req.params.id) {
        res.send({err: "invalid data"});
        return;
    }

    Courses.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.delete('/tpais/course/delete/:id', (req, res)=> {
    if(!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Courses.findByIdAndDelete(req.params.id, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    })
});

router.get('/space/courses', (req, res) => {
    Courses.find({ forWebsite: 's' }, [], {sort: {date: -1}}, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send({ courses: result });
    });
});

router.post('/space/courses/new', (req, res) => {
    const body = clearBadChars(req.body);
    if (!body || !isLoggedIn) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    const course = new Courses(body);
    course.save();
});

router.put('/space/courses/update/:id', (req, res)=> {
    if (!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Courses.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.delete('/space/courses/delete/:id', (req, res)=> {
    if(!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }
    Courses.findByIdAndDelete(req.params.id, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.get('/tpais/events', (req, res) => {
    Events.find({ forWebsite: 't' }, [], {sort:{date: -1}} ,function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send({ events: result });
    });
});

router.get('/space/events', (req, res) => {
    Events.find({ forWebsite: 's' }, [], {sort:{date: -1}}, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send({ events: result });
    });
});

router.post('/events/new', (req, res) => {
    const body = clearBadChars(req.body);
    if (!body || !isLoggedIn) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    const event = new Events(body);
    event.save();
    res.sendStatus(200);
});

router.put('/tpais/events/update/:id', (req, res)=> {
    if (!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Events.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.put('/space/events/update/:id', (req, res)=> {
    if (!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Events.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.delete('/tpais/events/delete/:id', (req, res)=> {
    if(!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Events.findByIdAndDelete(req.params.id, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.delete('/space/events/delete/:id', (req, res)=> {
    if(!req.params.id) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    Events.findByIdAndDelete(req.params.id, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.get('/tpais/images/:id', (req, res) => {
    Images.find({ forWebsite: 't', category: req.params.id }, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send({ images: result });
    });
});

router.get('/space/images/:id', (req, res) => {
    Images.find({ forWebsite: 's', category: req.params.id }, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send({ images: result });
    });
});

router.get('/tpais/gallery', async (req, res) => {
    const result = await Images.aggregate().match({ forWebsite: "t" }).group(
    {
        _id: '$category',
        imgUrl: { $first: "$img" },
        count: { $sum: 1 }
    });
    res.send({ categories: result });
});

router.get('/space/gallery', async (req, res) => {
    const result = await Images.aggregate().match({ forWebsite: "s" }).group(
    {
        _id: '$category',
        imgUrl: { $first: "$img" },
        count: { $sum: 1 }
    });
    res.send({ categories: result });
});

router.post('/images/new', (req, res) => {
    const body = clearBadChars(req.body);
    if (!body || !isLoggedIn) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    const image = new Images(body);
    image.save();
    res.sendStatus(200);
});

router.get('/tpais/videos', (req, res) => {
    Videos.find({ forWebsite: 't' }, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.get('/space/videos', (req, res) => {
    Videos.find({ forWebsite: 's' }, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.get('/tpais/videos', (req, res) => {
    Videos.find({ forWebsite: 't' }, function(err, data) {
        if (err)
            res.send(err.message);
        else
            res.send(data);
    });
});

router.get('/space/videos', (req, res) => {
    Videos.find({ forWebsite: 's' }, function(err, data) {
        if (err)
            res.send(err.message);
        else
            res.send(data);
    });
});

router.post('/videos/new', (req, res) => {
    const body = clearBadChars(req.body);
    if (!body || !isLoggedIn) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    const image = new Videos(body);
    image.save();
    res.sendStatus(200);
});

router.post('/contactus', (req, res) => {
    const body = clearBadChars(req.body);
    if (!body || !isLoggedIn || !isValidFullName(body.fullname) || !isValidEmail(body.email) || !isValidMessage(body.message)) {
        res.send({ err: "invalid data", status: 400 });
        return;
    }

    const contact = new Contact(body);
    contact.save();
    res.sendStatus(200);
});

router.get('/space/news', async (req, res)=> {
    try {
        const courses = await Courses.find({ forWebsite: 's' }, [], {sort: {date: -1}, limit: 5});
        const events = await Events.find({ forWebsite: 's' }, [], {sort: {date: -1}, limit: 5});
        const experiments = await Experiments.find({ forWebsite: 's' }, [], {sort: {date: -1}, limit: 5});
        res.send({ courses, events, experiments });
    }
    catch(err) {
        res.send(err.message);
    }
});

router.get('/tpais/news', async (req, res)=> {
    try {
        const courses = await Courses.find({ forWebsite: 't' }, [], {sort: {date: -1}, limit: 5});
        const events = await Events.find({ forWebsite: 't' }, [], {sort: {date: -1}, limit: 5});
        const experiments = await Experiments.find({ forWebsite: 't' }, [], {sort: {date: -1}, limit: 5});
        res.send({ courses, events, experiments });
    }
    catch(err) {
        res.send(err.message);
    }
});

module.exports = router;